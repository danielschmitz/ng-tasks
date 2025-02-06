import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@enviroments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  http = inject(HttpClient);
  api = environment.baseUrl;

  constructor() {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.api}/categories`);
  }
}
