// 의존성 주입이 가능한 클래스들은 @Injectable() decorator 가 필요하므로,import 해준다.
import { Injectable } from '@angular/core';
// Http 요청과 관련된 처리를 해주는 모듈을 import 해준다.
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject/Subject';


@Injectable()
export class HttpService {
// http 라는 변수에 HttpClient 형 변수가 의존성 주입된다.
  constructor(private http: HttpClient) {  }

  loadNoticeService() {
    return this.http.get('/api/notice/fetch');
  }
  loadSubjectService() {
    return this.http.get('/api/subject/fetch');
  }
  addSubjectService(element: Subject) {
    return this.http.post('/api/subject/create' ,
    {
      name: element.name,
      major: element.major,
      courseNumber: element.courseNumber,
      credit: element.credit,
      time: element.time,
      professor: element.professor,
      lectureTime: element.lectureTime,
      lectureRoom: element.lectureRoom,
      isCyber: element.isCyber
    });
  }
  removeSubjectService(_name: string) {
    return this.http.delete('/api/subject/remove?request=' + _name);
  }
}
