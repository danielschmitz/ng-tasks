import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';


interface Token {
  token: string;
}
interface User {
  id: string;
  name: string;
  email: string;
}

const USER_KEY = 'authUser';
const TOKEN = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  storage = inject(StorageService);
  http = inject(HttpClient);
  private user: User | null = null;
  api = environment.baseUrl;

  constructor() {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<Token>(`${this.api}/auth/login`, { email, password })
      .pipe(
        map((token) => {
          console.log(token);
          const payload = this.decodeJwt(token);
          const user: User = {
            id: payload.id,
            name: payload.name,
            email: payload.email,
          };
          this.storage.set<User>(USER_KEY, user);
          this.storage.set<Token>(TOKEN, token);
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
    this.storage.remove(TOKEN);
  }

  private decodeJwt(token: Token): User {
    const base64Url = token.token.split('.')[1]; // O payload do JWT é a segunda parte
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Corrige o base64url
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload); // Retorna o payload decodificado
  }
}
