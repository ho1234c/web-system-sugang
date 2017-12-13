import { Component, ViewChild } from '@angular/core';
import { Subject } from '../subject/Subject';
import { Input } from '@angular/compiler/src/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpService } from '../http.service';

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
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpService) {
    this.loadSubject();
  }

  OnInit() { }

  loadSubject(): any {
    this.httpService.loadSubjectService().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    });
  }

  addSubject(subjectId: string) {
    this.httpService.addSubjectService(subjectId).subscribe((result: any) => {
      window.alert('신청되었습니다.');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
}
