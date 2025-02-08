import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

export interface Category {
  id?: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends ApiService<Category> {
  constructor() {
    super('categories'); 
  }
}
