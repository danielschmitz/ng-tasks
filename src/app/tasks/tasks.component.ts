import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TasksService, Task } from './tasks.service';
import { finalize, firstValueFrom, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CoreModule } from '../core.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tasks',
  imports: [CoreModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit, AfterViewInit {
  service = inject(TasksService);
  snak = inject(MatSnackBar);
  dialog = inject(MatDialog);
  tasks$: Observable<Task[]> = this.service.getAll();
  doneTasks$: Observable<Task[]> = this.service.getAllDone();
  tasks: Task[] = [];
  loading = false;
  loadingDone = false;
  showDoneTasks = false;

  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'category',
    'description',
    'actionEdit',
    'actionDelete',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Task>;
  @ViewChild(MatPaginator) paginatorDone!: MatPaginator;
  @ViewChild(MatSort) sortDone!: MatSort;
  @ViewChild(MatTable) tableDone!: MatTable<Task>;

  dataSource = new MatTableDataSource<Task>([]);
  selection = new SelectionModel<Task>(true, []);

  dataSourceDone = new MatTableDataSource<Task>([]);
  selectionDone = new SelectionModel<Task>(true, [])

  ngOnInit(): void {
    this.fetchTasks();
    this.fetchTasksDone();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSourceDone.sort = this.sortDone;
    this.dataSourceDone.paginator = this.paginatorDone;
  }

  fetchTasks() {
    this.loading = true;
    this.tasks$.subscribe({
      next: (tasks) => {
        this.dataSource.data = tasks;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snak.open('Error loading tasks');
      },
    });
  }

  fetchTasksDone() {
    this.loadingDone = true;
    this.doneTasks$.subscribe({
      next: (tasks) => {
        this.dataSourceDone.data = tasks;
        this.loadingDone = false;
      },
      error: () => {
        this.loadingDone = false;
        this.snak.open('Error loading tasks');
      },
    });
  } 

  onDeleteClick(id: string) {
    const dialogRef = this.dialog
      .open(ConfirmDialogComponent, {
        data: { question: 'Delete this task?' },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.loading = true;
          this.service
            .delete(id)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe({
              next: () => {
                this.tasks$ = this.service.getAll();
                this.fetchTasks();
              },
              error: (error) => {
                this.snak.open(error.message.message);
              },
            });
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  isAllSelectedDone(){
    const numSelected = this.selectionDone.selected.length;
    const numRows = this.dataSourceDone.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  toggleAllRowsDone() {
    if (this.isAllSelectedDone()) {
      this.selectionDone.clear();
      return;
    }   

    this.selectionDone.select(...this.dataSourceDone.data);
  }

  onMarkAsDoneClick() {
    this.loading = true;
    this.service
      .markAsDone(this.selection.selected)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.fetchTasks();
          this.fetchTasksDone();
        },
        error: (error) => {
          this.snak.open(error.error.message);
        }
      });
  }

  onMarkAsUnDoneClick() {
    this.loadingDone = true;
    this.service
      .markAsUnDone(this.selectionDone.selected)
      .pipe(finalize(() => (this.loadingDone = false)))
      .subscribe({
        next: () => {
          this.fetchTasks();
          this.fetchTasksDone();
        },
        error: (error) => {
          this.snak.open(error.error.message);
        }
      });
  }
}
