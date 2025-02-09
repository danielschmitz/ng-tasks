import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { CoreModule } from '../../core.module';
import { Task } from '../tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  imports: [CoreModule],
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent {
  @Input() set task(value: Task) {
    this.updateForm(value);
  }
  @Output() onSubmit = new EventEmitter<Task>();
  @Output() onBack = new EventEmitter();
  fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      id: [this.task?.id],
      name: [this.task?.name, Validators.required],
      description: [this.task?.description],
    });
  }
  private updateForm(task: Task) {
    this.form.patchValue({
      id: task.id,
      name: task.name,
      description: task.description,
    });
  }

  onSubmitClick() {
    this.onSubmit.emit(this.form.value);
  }
  onBackClick() {
    this.onBack.emit();
  }

}
