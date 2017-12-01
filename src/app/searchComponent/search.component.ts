import {Component, ViewChild} from '@angular/core';
import { CourseSet } from '../mock.course';
import { Course } from '../course';
import {Input} from '@angular/compiler/src/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  //검색결과를 display
  searchList = CourseSet; //검색 결과 list
  @ViewChild('form') myform;

  //this.myform.resetForm();
  // list update 함수

  register(course: Course) {
    //해당 강의 신청
  }
}
