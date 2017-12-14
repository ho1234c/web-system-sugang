import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Subject } from '../subject/Subject';
import { Input } from '@angular/compiler/src/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SubService } from '../subService';
import { AuthenticationService } from '../authService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  majorColumns: string[] = ['courseNumber', 'name', 'credit', 'lectureTime', 'lectureRoom', 'professor', 'seats', 'major', 'join'];
  majorName: string[] = ['미디어', '전자공학', '교양', '소프트웨어'];
  selected: string;
  dataSource: MatTableDataSource<Subject>;
  @Output() joinReq: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private subService: SubService, private authenticationService: AuthenticationService) {
    this.loadSubject();
  }

  OnInit() { }

  loadSubject() {
    this.subService.loadSubject().then((result: any) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    });
  }

  addSubject(subject: Subject) {
    const { user } = this.authenticationService;

    if(!user) {
      return window.alert('로그인이 필요합니다');
    }

    this.subService.addSubject(subject._id).then((result: any) => {
      const newUser = user.addSubject(subject);

      subject.seats--;
      this.authenticationService.change(newUser)
      window.alert('신청되었습니다.');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
} 
