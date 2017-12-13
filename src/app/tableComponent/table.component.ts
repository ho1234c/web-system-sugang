import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Subject } from '../subject/Subject';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { inputTable } from '../subject/inputTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class tableComponent implements OnInit {
  mySubjectDBs1: Subject[];
  inputTableDB: inputTable[];
  tempParsing: string[];
  time: string[];

  displayedColumns = ['time', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource2: any;

  ngOnInit() {
    this.loadSubject();
    this.mySubjectDBs1 = [];
    this.inputTableDB = [];
    this.time = ['Z(0800)', 'Z(0830)', 'A(0900)', 'A(0930)', 'A(1000)', 'B(1030)', 'B(1100)', 'B(1130)', 'C(1200)', 'C(1230)', 'C(1300)', 'D(1330)', 'D(1400)', 'D(1430)',
      'E(1500)', 'E(1530)', 'E(1600)', 'F(1630)', 'F(1700)', 'F(1730)', 'G(1800)', 'G(1830)', 'G(1900)'];

    this.time.forEach(el => {
      const t = new inputTable(el, '', '', '', '', '');
      this.inputTableDB.push(t);
    });
  }

  f: boolean;
  constructor(private httpService: HttpService, private changeDetectorRefs: ChangeDetectorRef) {
    this.f = false;
  }

  loadSubject(): any {
    this.httpService.loadSubjectService().subscribe(result =>
    {
      for (let i in result) {
        if (result.hasOwnProperty(i) != null) {
          this.mySubjectDBs1.push(result[i]);
        }
      }
      this.loadInputTableDB();
    });
  }
  loadInputTableDB(): any {
    for (let i = 0; i < this.mySubjectDBs1.length; i++) {
      this.tempParsing = this.mySubjectDBs1[i].lectureTime.split('');
        if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'Z') {
          this.inputTableDB[0].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[1].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
         } else if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'A') {
          this.inputTableDB[2].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[3].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[4].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        } else if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'B') {
          this.inputTableDB[5].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[6].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[7].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        } else if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'C') {
          this.inputTableDB[8].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[9].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[10].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        } else if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'D') {
          this.inputTableDB[11].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[12].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[13].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        } else if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'E') {
          this.inputTableDB[14].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[15].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[16].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        } else if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'F') {
          this.inputTableDB[17].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[18].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[19].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        } else if (this.tempParsing[0] === '월' && this.tempParsing[1] === 'G') {
          this.inputTableDB[20].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[21].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
          this.inputTableDB[22].monday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        }

      if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'Z') {
        this.inputTableDB[0].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[1].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'A') {
        this.inputTableDB[2].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[3].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[4].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'B') {
        this.inputTableDB[5].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[6].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[7].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'C') {
        this.inputTableDB[8].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[9].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[10].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'D') {
        this.inputTableDB[11].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[12].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[13].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'E') {
        this.inputTableDB[14].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[15].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[16].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'F') {
        this.inputTableDB[17].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[18].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[19].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '화' && this.tempParsing[1] === 'G') {
        this.inputTableDB[20].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[21].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[22].tuesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      }

      if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'Z') {
        this.inputTableDB[0].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[1].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'A') {
        this.inputTableDB[2].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[3].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[4].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'B') {
        this.inputTableDB[5].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[6].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[7].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'C') {
        this.inputTableDB[8].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[9].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[10].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'D') {
        this.inputTableDB[11].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[12].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[13].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'E') {
        this.inputTableDB[14].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[15].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[16].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'F') {
        this.inputTableDB[17].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[18].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[19].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '수' && this.tempParsing[1] === 'G') {
        this.inputTableDB[20].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[21].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[22].wednesday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      }

      if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'Z') {
        this.inputTableDB[0].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[1].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'A') {
        this.inputTableDB[2].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[3].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[4].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'B') {
        this.inputTableDB[5].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[6].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[7].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'C') {
        this.inputTableDB[8].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[9].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[10].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'D') {
        this.inputTableDB[11].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[12].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[13].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'E') {
        this.inputTableDB[14].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[15].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[16].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'F') {
        this.inputTableDB[17].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[18].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[19].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '목' && this.tempParsing[1] === 'G') {
        this.inputTableDB[20].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[21].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[22].thursday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      }

      if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'Z') {
        this.inputTableDB[0].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[1].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'A') {
        this.inputTableDB[2].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[3].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[4].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'B') {
        this.inputTableDB[5].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[6].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[7].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'C') {
        this.inputTableDB[8].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[9].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[10].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'D') {
        this.inputTableDB[11].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[12].friday = this.mySubjectDBs1[i].name+ '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[13].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'E') {
        this.inputTableDB[14].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[15].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[16].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'F') {
        this.inputTableDB[17].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[18].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[19].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      } else if (this.tempParsing[0] === '금' && this.tempParsing[1] === 'G') {
        this.inputTableDB[20].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[21].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
        this.inputTableDB[22].friday = this.mySubjectDBs1[i].name + '\n' + '(' + this.mySubjectDBs1[i].lectureRoom + ')';
      }

      }
    this.dataSource2 = new SubjectDataSource(this.inputTableDB);
    this.changeDetectorRefs.detectChanges();
  }
}
export class SubjectDataSource extends DataSource<any> {
  constructor (private inputtable) {
    super();
  }
  connect(): Observable<any> {
    return;
    // return Observable.of(this.inputtable);
  }
  disconnect() {}
}


