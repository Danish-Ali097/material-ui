import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  static host = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  LoginUser(user: any) {
    return this.http.post('/user/login', user);
  }

  RegisterUser(user: any) {
    return this.http.post('/user/register', user);
  }
}
