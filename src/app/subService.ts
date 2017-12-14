import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject/Subject';
import { Announce } from './announce';
import { AuthenticationService } from './authService';

@Injectable()
export class SubService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  loadNotice() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/notice/fetch').subscribe((res: Response) => {
        resolve(res);
      }, (error: any) => {
        reject(error);
      })
    })
  }

  loadSubject() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/subject/fetch').subscribe((res: Response) => {
        resolve(res);
      }, (error: any) => {
        reject(error);
      })
    })
  }

  addSubject(subjectId: string) {
    const user = this.authenticationService.user;

    if (!user) {
      return Promise.reject('로그인이 필요합니다.');
    }
    return new Promise((resolve, reject) => {
      this.http.post(`/api/user/add/${user._id}`, { subjectId })
        .subscribe((res: Response) => {
          resolve(res)
        }, (error: any) => {
          reject(error);
        })
    })
  }

  removeSubject(subjectId: string) {
    const user = this.authenticationService.user;

    return new Promise((resolve, reject) => {
      this.http.delete(`/api/user/delete/${user._id}/${subjectId}`)
        .subscribe((res: Response) => {
          resolve(res)
        }, (error: any) => {
          reject(error);
        })
    })
  }
}  