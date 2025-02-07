import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CategoriesService, Category } from './categories.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CoreModule } from '../core.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categories',
  imports: [CoreModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit, AfterViewInit {

  service = inject(CategoriesService);
  snak = inject(MatSnackBar);
  categories$: Observable<Category[]> = this.service.getCategories();
  categories: Category[] = [];
  loading = false;

  displayedColumns: string[] = ['id', 'name', 'actionEdit', 'actionDelete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;
  dataSource = new MatTableDataSource<Category>([]);

  ngOnInit(): void {
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

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  
}

