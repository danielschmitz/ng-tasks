import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';

interface User {
  name: string;
  email: string;
  token: string;
}

const USER_KEY = 'authUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  storage = inject(StorageService);
  http = inject(HttpClient);
  private user: User | null = null;
  api = environment.baseUrl;

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<string>(`${this.api}/auth/login`, { email, password })
      .pipe(
        map((token) => {
          const user: User = {
            name: '?',
            email: email,
            token: token,
          };
          this.storage.set<User>(USER_KEY, user);
          return user;
        }),
      );
  }

  isLogged() {
    return !!this.storage.get<User>(USER_KEY);
  }

  logout() {
    this.user = null;
    this.storage.remove(USER_KEY);
  }

  constructor() {}
}
