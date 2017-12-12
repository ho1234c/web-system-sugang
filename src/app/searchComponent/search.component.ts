import { Component, ViewChild } from '@angular/core';
import { subjects } from '../subject/mock.subject';
import { Subject } from '../subject/Subject';
import { Input } from '@angular/compiler/src/core';
import { MatTableDataSource } from '@angular/material';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  majorColumns: string[] = ['courseNumber', 'name', 'credit', 'lectureTime', 'lectureRoom', 'professor', 'seats', 'major', 'join'];
  majorName: string[] = ['미디어', '전자공학', '교양', '소프트웨어'];
  searchList: Subject[]; //검색 결과 list
  selected: string;
  dataSource: MatTableDataSource<Subject>;
  // dataSource = new MatTableDataSource<Subject>(this.searchList);

  constructor(private httpService: HttpService) {}  

  ngOnInit() {
    this.loadSubject();
  }

  loadSubject(): any {
    this.httpService.loadSubjectService().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.subject);
    });
  }

  register(courseNumber: string) {
    //해당 강의 신청
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
}
