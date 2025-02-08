import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@enviroments';
import { Observable } from 'rxjs';

export class ApiService<T> {
  protected http = inject(HttpClient);
  protected apiBaseUrl: string;

  constructor(private resourceName: string) {
    this.apiBaseUrl = `${environment.baseUrl}/${resourceName}`;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiBaseUrl}`);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.apiBaseUrl}`, item);
  }

  update(id: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiBaseUrl}/${id}`, item);
  }

  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.apiBaseUrl}/${id}`);
  }
}
