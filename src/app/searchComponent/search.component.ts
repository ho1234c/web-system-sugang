import {Component, ViewChild} from '@angular/core';
import { CourseSet } from '../mock.course';
import { Course } from '../course';
import {Input} from '@angular/compiler/src/core';
import {MatTableDataSource} from "@angular/material";

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


  displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: '삭제'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: '삭제'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 4, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 5, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 6, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 7, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 8, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 9, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 7, name: 'Lithium', weight: 6.941, symbol: '삭제'},
  {position: 7, name: 'Lithium', weight: 6.941, symbol: '삭제'}
];
