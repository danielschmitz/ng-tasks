import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@enviroments';
import { Observable } from 'rxjs';

interface Home {
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = environment.baseUrl;
  http = inject(HttpClient);
  
  constructor() { }

  helloWorld(): Observable<Home> {
    return this.http.get<Home>(`${this.api}/hello-world-json`);
  }
}
