import {Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpService } from '../http.service';
import { subjects } from '../subject/mock.subject';
import { Subject } from '../subject/Subject';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class tableComponent implements OnInit {
  displayedColumns = ['time', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  dataSource2: any;
  mySubjectDBs1: Subject[];

  ngOnInit() {
    this.loadSubject();
    this.mySubjectDBs1 = [];
  }
  f: boolean;
  constructor(private httpService: HttpService, private changeDetectorRefs: ChangeDetectorRef) {
    this.f = false;
  }

  loadSubject(): any {
    this.httpService.loadSubjectService().subscribe(result =>
    {
      console.log(result);
      console.log(result[0]);
      for (let i in result) {
        if (result.hasOwnProperty(i) != null) {
          this.mySubjectDBs1.push(result[i]);
          this.mySubjectDBs1[i].addbutton = '삭제';
        }
      }
      console.log(this.mySubjectDBs1);
      this.dataSource2 = new SubjectDataSource(this.mySubjectDBs1);
      this.changeDetectorRefs.detectChanges();
    });
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


export interface Element {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;

}
const ELEMENT_DATA: Element[] = [
  {time: 'Z (08:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'Z (08:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'A (09:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'A (09:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'A (10:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'B (10:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'B (11:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'B (11:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'C (12:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'C (12:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'C (13:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'D (13:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'D (14:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'D (14:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'E (15:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'E (15:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'E (16:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'F (16:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'F (17:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'F (17:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'G (18:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'G (18:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
  {time: 'G (19:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''}
  ]
export interface ElementRow {
  z: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
}

const ELEMENT_DATARow: ElementRow[] = [
  {z: 'zz', a: 'aa', b: 'bb', c: 'cc', d: 'dd', e: 'ee', f: 'ff', g: 'gg'}
  ]

