import {Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Subjectselects } from './mock.subjectselect';
import { Subjectselect } from './subjectselect';
import { MyInformation } from './mock.myinformation';
import { OnInit } from '@angular/core';

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

  ngOnInit() {
    this.panelOpenState = false;
  }
  displayedColumns = ['name', 'major', 'subjectId', 'credit', 'time', 'professor', 'lectureTime', 'lectureRoom', 'isCyber', 'addbutton'];
  dataSource = new MatTableDataSource<Subjectselect>(Subjectselects);

  dataSource2 = new MatTableDataSource<Subjectselect>(MyInformation);


}





