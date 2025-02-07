import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@enviroments';
import { Observable } from 'rxjs';

export interface Category {
  id?: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
 
  private http = inject(HttpClient);
  private api = environment.baseUrl;

  constructor() {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}/categories`);
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.api}/categories/${id}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.api}/categories`, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.api}/categories/${category.id}`, category);
  }
}
