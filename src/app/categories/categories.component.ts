import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { CategoriesService, Category } from './categories.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CoreModule } from '../core.module';

@Component({
  selector: 'app-categories',
  imports: [CoreModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements AfterViewInit {
  service = inject(CategoriesService);
  categories$: Observable<Category[]> = this.service.getCategories();
  categories: Category[] = [];
  loading = false;

  displayedColumns: string[] = ['id', 'name'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;
  dataSource = new MatTableDataSource<Category>([]);

  ngAfterViewInit(): void {
    this.loading = true;
    this.categories$.subscribe((categories) => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = categories;
      this.loading = false;
    });
  }
}
