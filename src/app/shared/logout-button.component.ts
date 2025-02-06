import { Component, inject } from '@angular/core';
import { CoreModule } from '../core.module';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-logout-button',
  imports: [CoreModule],
  template: `
    <button mat-icon-button color="warn" (click)="logout()">
      <mat-icon>logout</mat-icon>
    </button>
  `,
  styles: ``,
})
export class LogoutButtonComponent {
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
