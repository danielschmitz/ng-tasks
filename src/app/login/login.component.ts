import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  auth = inject(AuthService);

  ngOnInit(): void {
    console.log('onInit');
    this.auth.login('user1@email.com', '123456').subscribe({
      next: (user) => {
        console.log({user});
      },
      error: (error) => {
        console.error("deu erro", error);
      },
    });
  }
}
