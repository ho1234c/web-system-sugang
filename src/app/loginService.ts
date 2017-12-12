import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('/api/user/login', { email: username, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        //let user = response.json();
        //if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(response.json()));
        //}
        return true;
      });
  }

  logout() {
    //this.http.get('/api/user/logout').subscribe((res) => {
      localStorage.removeItem('currentUser');
    //});
    // remove user from local storage to log user out
  }
}
