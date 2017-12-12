import {Component, ViewChild} from '@angular/core';
import { subjects } from '../subject/mock.subject';
import { Subject } from '../subject/Subject';
import {Input} from '@angular/compiler/src/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  joinList = subjects;
  @ViewChild('form') myform;
  displayedColumns = ['courseNumber', 'name', 'credit', 'lectureTime', 'lectureRoom', 'professor', 'seats', 'major', 'drop'];

  dataSource = new MatTableDataSource<Subject>(this.joinList);

  // this.myform.resetForm();

  drop(courseNumber: string) {
    // 해당 강의 취소
  }
}
