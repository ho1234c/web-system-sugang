import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './User';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  user: User;
  userChange: Subject<User> = new Subject<User>();

  constructor(private http: Http) { }

  getSession() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/user/session').subscribe((res: Response) => {
        if(res['_body']) {
          this.change(res.json());
        }
        resolve(this.user);
      }, (error: any) => {
        reject(error);
      });
    })
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post('/api/user/login', { email: username, password: password })
        .subscribe((res: Response) => {
          this.change(res.json());
          resolve(this.user)
        }, (error: any) => {
          reject(error);
        })
    })
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/user/logout').subscribe((res: Response) => {
        this.change(null);
        resolve();
      }, (error: any) => {
        reject(error);
      });
    });
  }

  register(email: string, password: string, displayName: string) {
    return new Promise((resolve, reject) => {
      this.http.post('/api/user/create', { email: email, password: password, displayName: displayName })
        .subscribe((res: Response) => {
          this.change(res.json());
          resolve(this.user);
        }, (error: any) => {
          reject(error);
        })
    })
  }

  change(user: User){
    this.user = user ? new User(user._id, user.email, user.displayName, user.major, user.grade, user.maximum_credit, user.subjects): null;
    this.userChange.next(this.user);
  }
}
