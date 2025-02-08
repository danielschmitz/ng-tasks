import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { CoreModule } from '../core.module';


@Component({
  selector: 'app-confirm-dialog',
  imports: [CoreModule],
  template: `
    <h2 mat-dialog-title>Confirm</h2>
    <div mat-dialog-content>
      <p>{{ data.question }}</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button  (click)="onCancel()">Cancel</button>
      <button mat-flat-button color="primary" (click)="onConfirm()">Ok</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { question: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
