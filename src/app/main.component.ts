import {Component, ChangeDetectorRef } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Subjectselects } from './mock.subjectselect';
import { Subjectselect } from './subjectselect';
import { MyInformation } from './mock.myinformation';
import { OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { addSubject } from './addsubject';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {


  name = '정의원';
  department = '소프트웨어';
  grade = 3;
  maxPoint = 21;

  panelOpenState: boolean;

  noticeDBs: Object;

  tempElement: addSubject;

  displayedColumns = ['name', 'major', 'subjectId', 'credit', 'time', 'professor', 'lectureTime', 'lectureRoom', 'isCyber', 'addbutton'];
  dataSource = new MatTableDataSource<Subjectselect>(Subjectselects);
  dataSource2: any;
  mySubjectDBs1: Subjectselect[];

  ngOnInit() {
    this.panelOpenState = false;
    this.loadNotice();
    this.loadSubject();
    this.tempElement = {
      name: '',
      major: '',
      subjectId: '',
      credit: 0,
      time: 0,
      professor: '',
      lectureTime: '',
      lectureRoom: '',
      isCyber: true
    };
    this.mySubjectDBs1 = [];
  }
  constructor(private httpService: HttpService, private changeDetectorRefs: ChangeDetectorRef) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  loadNotice(): any {
    this.httpService.loadNoticeService().subscribe( result => this.noticeDBs = result);
  }
  loadSubject(): any {
    this.httpService.loadSubjectService().subscribe(result =>
    {
      // this.mySubjectDBs1 = result;
      console.log(result);
      console.log(result[0]);
      for (let i in result) {
          if (result.hasOwnProperty(i) != null) {
            this.mySubjectDBs1.push(result[i]);
            this.mySubjectDBs1[i].addbutton = '삭제';
          }
      }
      console.log(this.mySubjectDBs1);
      this.dataSource2 = new SubjectDataSource(this.mySubjectDBs1);
      this.changeDetectorRefs.detectChanges();
    });
  }
  addSubject(_name: string, _major: string, _subjectId: string, _credit: number, _time: number, _professor: string,
             _lectureTime: string, _lectureRoom: string, _isCyber: boolean): any {
    this.tempElement.name = _name;
    this.tempElement.major = _major;
    this.tempElement.subjectId = _subjectId;
    this.tempElement.credit = _credit;
    this.tempElement.time = _time;
    this.tempElement.professor = _professor;
    this.tempElement.lectureTime = _lectureTime;
    this.tempElement.lectureRoom = _lectureRoom;
    this.tempElement.isCyber = _isCyber;
    this.httpService.addSubjectService(this.tempElement).subscribe();
  }
  removeSubject(name: string): any {
    this.httpService.removeSubjectService(name).subscribe();
  }

}

////////////////////////////////////////////////////////////////////////
export class SubjectDataSource extends DataSource<any> {
  constructor (private subjects) {
    super();
  }
  connect(): Observable<any> {
    return Observable.of(this.subjects);
  }
  disconnect() {}
}


