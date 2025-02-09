import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TasksService, Task } from './tasks.service';
import { finalize, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CoreModule } from '../core.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog.component';

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
  tasks$: Observable<Task[]> = this.service.getAll()
  tasks: Task[] = [];
  loading = false;

  displayedColumns: string[] = ['id', 'name', 'description', 'actionEdit', 'actionDelete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Task>;
  dataSource = new MatTableDataSource<Task>([]);

  ngOnInit(): void {
    this.fetchTasks();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

  onDeleteClick(id: string) {
    const dialogRef = this.dialog
      .open(ConfirmDialogComponent, {
        data: { question: 'Delete this task?' },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.loading = true;
          this.service.delete(id)
          .pipe(finalize(() => (this.loading = false)))
          .subscribe({
            next: () => {
              this.tasks$ = this.service.getAll();
              this.fetchTasks();
            },
            error: (error) => {
              this.snak.open(error.message.message);
            }
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
}
