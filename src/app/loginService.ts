import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('/api/user/login', { email: username, password: password })
      .map((response) => {
        localStorage.setItem('currentUser', JSON.stringify(response.json()));
        return true;
      });
  }

  logout() {
    this.http.get('/api/user/logout').subscribe((res) => {
      localStorage.removeItem('currentUser');
    });
  }
  register(email: string, password: string, displayName: string) {
    return this.http.post('/api/user/create', {email: email, password: password, displayName: displayName})
      .map((res) => {
      //if(res  'success') {

      //}
      });
  }
}
