import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  obtenerDatos(): Observable<User[]> {
    return this.httpclient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}