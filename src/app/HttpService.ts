import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Announce} from './announce';
import {Course} from './subject/course';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getAllAnnounce() {
    return this.http.get('/api/notice/getAllNotice?request=getAllAnnounce');
  }
  addAnnounce(announce: Announce) {
    return this.http.post('/api/notice/createNotice?request=createAnnounce', announce);
  }
  addCourse(course: Course) {
    return this.http.post('/api/subject/createSubject?request=createSubject', course);
  }
  getSubjectByMajor(major: string) {
    return this.http.post('/api/subject/getSubjectByMajor?request=getCourseByMajor', {major: major});
  }
  getJoinSubject(userId: string) {
    return this.http.post('/api/user/getSubjectById?request=getCourseById', {userId: userId});
  }
  joinSubject(userId: string, subjectId: number) {
    return this.http.post('/api/user/joinSubject?request=joinCourse', {userId: userId, subjectId: subjectId});
  }
  /*
  postJoinSubject(userId: string, courseId): boolean {
    if (this.http.post()){
      //신청성공
      return true;
    }else {
      //시간표 중복
      return false;
    }
  }//강의 신청
  deleteJoinSubject() { }//신청강의 삭제
  */
}
