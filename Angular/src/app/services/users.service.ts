import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  singin(user: any): Observable<any> {
    return this.http.post<User>(
      'http://localhost:3000/singin',
      user,
      httpOptions
    );
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/login',
      user,
      httpOptions
    );
  }
}
