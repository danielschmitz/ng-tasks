import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

export interface Task {
  id?: string;
  name: string;
  description?: string;
  done: boolean;
  categoryId?: string;
  category?: string
}

@Injectable({
  providedIn: 'root',
})
export class TasksService extends ApiService<Task> {
  constructor() {
    super('tasks'); 
  }
}
