import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  service = inject(CategoriesService);
  ngOnInit(): void {
    this.service.getCategories().subscribe({
      next: (categories) => {
        console.log(categories);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
