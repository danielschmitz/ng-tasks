import { Component, inject } from '@angular/core';
import { CoreModule } from '../../core.module';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService, Task } from '../tasks.service';
import { finalize, firstValueFrom, Observable, switchMap } from 'rxjs';
import { FormTaskComponent } from '../form/form-task.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

// using async await

@Component({
  selector: 'app-edit-task',
  imports: [CoreModule, FormTaskComponent],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  service = inject(TasksService);
  id: string | null;
  task: Task = { name: '', description: '', done: false };
  loading = false;
  snak = inject(MatSnackBar);

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchTasks();
  }
  
  async fetchTasks() {
    this.loading = true;
    if (this.id === null) throw new Error('No id provided');
    try {
      this.task = await firstValueFrom(this.service.getById(this.id));
    } catch (error: HttpErrorResponse | any) {
      this.snak.open(error.error.message);
    }
    finally {
      this.loading = false;
    }
  }

  onBackClick() {
    this.router.navigate(['/tasks']);
  }
  async onSubmitClick(task: Task) {
    this.loading = true;
    try {
      await firstValueFrom(this.service.update(this.id!,task));
      this.router.navigate(['/tasks']);
    } catch (error: HttpErrorResponse | any) {
      this.snak.open(error.error.message);
    } finally {
      this.loading = false;
    }
  }
}
