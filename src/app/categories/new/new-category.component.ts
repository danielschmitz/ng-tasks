import { Component, inject } from '@angular/core';
import { CoreModule } from '../../core.module';
import { FormCategoryComponent } from '../form/form-category.component';
import { CategoriesService, Category } from '../categories.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-new-category',
  imports: [CoreModule, FormCategoryComponent],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css',
})
export class NewCategoryComponent {
  category: Category = { name: '' };
  router = inject(Router);
  service = inject(CategoriesService);
  snak = inject(MatSnackBar);
  loading = false;
  onSubmit(category: Category) {
    this.loading = true;
    this.service
      .createCategory(category)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.router.navigate(['/categories']);
        },
        error: (error) => {
          this.snak.open(error.error.message);
        },
      });
  }
  onBack() {
    this.router.navigate(['/categories']);
  }
}

