import { Component, inject, OnInit } from '@angular/core';
import { AuthService, User } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreModule } from '../core.module';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [CoreModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  auth = inject(AuthService);
  snak = inject(MatSnackBar);
  fb = inject(FormBuilder);
  loading = false;
  form: FormGroup;
  loggedIn$: Observable<boolean> = this.auth.loginState$;
  user$: Observable<User | null> = this.auth.userState$;

  constructor() {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        createAccount: [false],
        name: [''],
      },
      { validators: this.nameRequiredIfCreatingAccount },
    );
  }

  ngOnInit(): void {
    // this.auth.login('user1@email.com', '123456').subscribe({
    //   next: (user) => {
    //     console.log({user});
    //   },
    //   error: (error) => {
    //     console.error("deu erro", error);
    //     this.snak.open(error.error.message);
    //   },
    // });
    this.form.setValue({
      email: 'user1@email.com',
      password: '123456',
      createAccount: false,
      name: 'User 1',
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const createAccount = this.form.get('createAccount')?.value;
      this.loading = true;

      this.auth
        .login(this.form.get('email')?.value, this.form.get('password')?.value, createAccount ? this.form.get('name')?.value : null)  
        .subscribe({
          next: (user) => {
            this.loading = false;
            console.log({ user });
            this.snak.open('Login realizado com sucesso');
          },
          error: (error) => {
            this.loading = false;
            console.error('deu erro', error);
            this.snak.open(error.error.message);
          },
        });
    }
  }

  logout() {
    this.auth.logout();
    this.snak.open('Logout realizado com sucesso');
  }

  private nameRequiredIfCreatingAccount(control: AbstractControl) {
    const createAccount = control.get('createAccount')?.value;
    const nameControl = control.get('name');

    if (createAccount && !nameControl?.value) {
      nameControl?.setErrors({ required: true });
      return { nameRequired: true };
    }

    // Limpa erros anteriores se a condição não for mais válida
    nameControl?.setErrors(null);
    return null;
  }
}
