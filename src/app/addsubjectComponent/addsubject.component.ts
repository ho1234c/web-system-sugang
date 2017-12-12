import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Subject } from '../subject/Subject';
import { subjects } from '../subject/mock.subject';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})

export class addsubjectComponent implements OnInit {
  displayedColumns = ['name', 'major', 'courseNumber', 'credit', 'time', 'professor', 'lectureTime', 'lectureRoom', 'isCyber', 'addbutton'];
  dataSource = new MatTableDataSource<Subject>(subjects);
  tempElement: Subject;
  ngOnInit() {
    this.tempElement = {
      name: '',
      major: '',
      courseNumber: '',
      credit: 0,
      time: 0,
      professor: '',
      lectureTime: '',
      lectureRoom: '',
      isCyber: true,
      seats: 0,
    };
  }
  constructor(private httpService: HttpService) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  addSubject(_name: string, _major: string, _courseNumber: string, _credit: number, _time: number, _professor: string,
             _lectureTime: string, _lectureRoom: string, _isCyber: boolean, _seats: number): any {
    this.tempElement.name = _name;
    this.tempElement.major = _major;
    this.tempElement.courseNumber = _courseNumber;
    this.tempElement.credit = _credit;
    this.tempElement.time = _time;
    this.tempElement.professor = _professor;
    this.tempElement.lectureTime = _lectureTime;
    this.tempElement.lectureRoom = _lectureRoom;
    this.tempElement.isCyber = _isCyber;
    this.tempElement.seats = _seats;
    this.httpService.addSubjectService(this.tempElement).subscribe();
  }
}
