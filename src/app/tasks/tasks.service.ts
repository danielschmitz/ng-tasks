import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  name: string;
  description?: string;
  done: boolean;
  categoryId?: string;
  category?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService extends ApiService<Task> {
  constructor() {
    super('tasks'); 
  }
  
  markAsDone(tasks: Task[]): Observable<any> {
    const ids: number[] = tasks.map((t) => parseInt(t.id!, 10)).filter((v) => !isNaN(v));
    return this.http.put<any>(`${this.apiBaseUrl}/complete`, {ids});
  }  
}
