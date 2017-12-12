import {Component, ViewChild} from '@angular/core';
import { CourseSet } from '../subject/mock.course';
import { Course } from '../subject/course';
import {Input} from '@angular/compiler/src/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  joinList = CourseSet;
  @ViewChild('form') myform;
  displayedColumns = ['subjectId', 'name', 'credit', 'lectureTime', 'lectureRoom', 'professor', 'seats', 'major', 'drop'];
  dataSource = new MatTableDataSource<Course>(this.joinList);

  // this.myform.resetForm();

  drop(subjectId: number) {
    // 해당 강의 취소
  }
}
