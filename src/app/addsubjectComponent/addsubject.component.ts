import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Subjectselect } from '../subject/subjectselect';
import { Subjectselects } from '../subject/mock.subjectselect';
import { addSubject } from '../subject/addsubject';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})

export class addsubjectComponent implements OnInit {
  displayedColumns = ['name', 'major', 'subjectId', 'credit', 'time', 'professor', 'lectureTime', 'lectureRoom', 'isCyber', 'addbutton'];
  dataSource = new MatTableDataSource<Subjectselect>(Subjectselects);
  tempElement: addSubject;
  ngOnInit() {
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
  }
  constructor(private httpService: HttpService) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
}
