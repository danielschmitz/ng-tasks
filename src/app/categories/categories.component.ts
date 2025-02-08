import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CategoriesService, Category } from './categories.service';
import { finalize, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CoreModule } from '../core.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog.component';

@Component({
  selector: 'app-categories',
  imports: [CoreModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  service = inject(CategoriesService);
  snak = inject(MatSnackBar);
  dialog = inject(MatDialog);
  categories$: Observable<Category[]> = this.service.getAll()
  categories: Category[] = [];
  loading = false;

  displayedColumns: string[] = ['id', 'name', 'actionEdit', 'actionDelete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;
  dataSource = new MatTableDataSource<Category>([]);

  ngOnInit(): void {
    this.fetchCategories();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  fetchCategories() {
    this.loading = true;
    this.categories$.subscribe({
      next: (categories) => {
        this.dataSource.data = categories;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snak.open('Error loading categories');
      },
    });
  }

  onDeleteClick(id: string) {
    const dialogRef = this.dialog
      .open(ConfirmDialogComponent, {
        data: { question: 'Delete this category?' },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.loading = true;
          this.service.delete(id)
          .pipe(finalize(() => (this.loading = false)))
          .subscribe({
            next: () => {
              this.categories$ = this.service.getAll();
              this.fetchCategories();
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
