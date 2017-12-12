import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from '../subject/Subject';
import { HttpService } from '../http.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-mysubject',
  templateUrl: './mysubject.component.html',
  styleUrls: ['./mysubject.component.css']
})

export class mysubjectComponent implements OnInit {
  displayedColumns = ['name', 'major', 'courseNumber', 'credit', 'time', 'professor', 'lectureTime', 'lectureRoom', 'isCyber', 'addbutton'];
  dataSource: any;
  mySubjectDBs1: Subject[];

  ngOnInit() {
    this.loadSubject();
    this.mySubjectDBs1 = [];
  }
  constructor(private httpService: HttpService, private changeDetectorRefs: ChangeDetectorRef) {}

  loadSubject(): any {
    this.httpService.loadSubjectService().subscribe(result =>
    {
      for (let i in result) {
        if (result.hasOwnProperty(i) != null) {
          this.mySubjectDBs1.push(result[i]);
          this.mySubjectDBs1[i].addbutton = '삭제';
        }
      }
      this.dataSource = new SubjectDataSource(this.mySubjectDBs1);
      this.changeDetectorRefs.detectChanges();
    });
  }
  removeSubject(name: string): any {
    this.httpService.removeSubjectService(name).subscribe();
  }
}

export class SubjectDataSource extends DataSource<any> {
  constructor (private subjects) {
    super();
  }
  connect(): Observable<any> {
    return Observable.of(this.subjects);
  }
  disconnect() {}
}
