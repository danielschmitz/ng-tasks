import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { CoreModule } from '../../core.module';
import { Category } from '../categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-category',
  imports: [CoreModule],
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent {
  @Input() set category(value: Category) {
    this.updateForm(value);
  }
  @Output() onSubmit = new EventEmitter<Category>();
  @Output() onBack = new EventEmitter();
  fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      id: [this.category?.id],
      name: [this.category?.name, Validators.required],
    });
  }
  private updateForm(category: Category) {
    this.form.patchValue({
      id: category.id,
      name: category.name,
    });
  }

  onSubmitClick() {
    this.onSubmit.emit(this.form.value);
  }
  onBackClick() {
    this.onBack.emit();
  }

}
