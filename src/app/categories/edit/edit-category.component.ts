import { Component, inject } from '@angular/core';
import { CoreModule } from '../../core.module';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, Category } from '../categories.service';
import { finalize, firstValueFrom, Observable, switchMap } from 'rxjs';
import { FormCategoryComponent } from '../form/form-category.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

// using async await

@Component({
  selector: 'app-edit-category',
  imports: [CoreModule, FormCategoryComponent],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css',
})
export class EditCategoryComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  service = inject(CategoriesService);
  id: string | null;
  category: Category = { name: '' };
  loading = false;
  snak = inject(MatSnackBar);

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchCategory();
  }
  
  async fetchCategory() {
    this.loading = true;
    if (this.id === null) throw new Error('No id provided');
    try {
      this.category = await firstValueFrom(this.service.getById(this.id));
    } catch (error: HttpErrorResponse | any) {
      this.snak.open(error.error.message);
    }
    finally {
      this.loading = false;
    }
  }

  onBackClick() {
    this.router.navigate(['/categories']);
  }
  async onSubmitClick(category: Category) {
    this.loading = true;
    try {
      await firstValueFrom(this.service.update(this.id!,category));
      this.router.navigate(['/categories']);
    } catch (error: HttpErrorResponse | any) {
      this.snak.open(error.error.message);
    } finally {
      this.loading = false;
    }
  }
}
