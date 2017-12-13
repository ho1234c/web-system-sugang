import {Component, Input} from '@angular/core';
import { Subject } from '../subject/Subject';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  joinList = JSON.parse(localStorage.getItem('currentUser')).subjects;

  displayedColumns = ['courseNumber', 'name', 'credit', 'lectureTime', 'lectureRoom', 'professor', 'seats', 'major', 'drop'];
  dataSource = new MatTableDataSource<Subject>(this.joinList);

  drop(courseNumber: string) {
    // 해당 강의 취소
  }
}
