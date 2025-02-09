import { Component, inject } from '@angular/core';
import { CoreModule } from '../../core.module';
import { FormTaskComponent } from '../form/form-task.component';
import { TasksService, Task } from '../tasks.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-new-task',
  imports: [CoreModule, FormTaskComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  task: Task = { name: '', description: '', done: false };
  router = inject(Router);
  service = inject(TasksService);
  snak = inject(MatSnackBar);
  loading = false;
  onSubmit(task: Task) {
    this.loading = true;
    task.done = false;
    this.service
      .create(task)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.router.navigate(['/tasks']);
        },
        error: (error) => {
          this.snak.open(error.error.message);
        },
      });
  }
  onBack() {
    this.router.navigate(['/tasks']);
  }
}

