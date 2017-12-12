import {Component, ViewChild} from '@angular/core';
import { CourseSet } from '../subject/mock.course';
import { Course } from '../subject/course';
import {Input} from '@angular/compiler/src/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  //검색결과를 display
  searchList = CourseSet; //검색 결과 list
  majorName: string[] = ['미디어', '전자공학', '국방디지털', '소프트웨어'];
  selected: string;

  @ViewChild('form') myform;

  displayedColumns = ['subjectId', 'name', 'credit', 'lectureTime', 'lectureRoom', 'professor', 'seats', 'major', 'join'];
  dataSource = new MatTableDataSource<Course>(this.searchList);

  //this.myform.resetForm();
  // list update 함수

  register(subjectId: number) {
    //해당 강의 신청
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
}
