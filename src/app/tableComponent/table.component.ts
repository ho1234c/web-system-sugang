import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SubService } from '../subService';
import { Subject } from '../subject/Subject';
import { User } from '../User';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { InputTable } from '../subject/inputTable';
import { AuthenticationService } from '../authService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  inputTable: InputTable[] = [];
  time: string[] = ['A(09:00)', 'B(10:30)', 'C(12:00)', 'D(13:30)', 'E(15:00)', 'F(16:30)', 'G(18:00)', 'H(19:00)'];
  timeTable = {};
  day = ['time', 'mon', 'tue', 'wed', 'thu', 'fri'];
  day_ko = ['time', '월', '화', '수', '목', '금'];
  dayTable = {};
  dataSource = new MatTableDataSource<InputTable>(this.inputTable);
  _subscription;

  ngOnInit() {
    if (this.authenticationService.user) {
      this.authenticationService.user.subjects.forEach(subject => {
        const userTime = subject.lectureTime.split(',');

        userTime.forEach(time => {
          const d = this.dayTable[time[0]];
          const t = this.timeTable[time[1]];
          this.inputTable[t][d] = true;
        })
      })
    }

    this._subscription = this.authenticationService.userChange.subscribe((user: User) => {
      if (!user) {
        this.time.forEach(el => {
          const t = new InputTable(el, '', '', '', '', '');
          this.inputTable.push(t);
        });
        return
      };

      user.subjects.forEach(subject => {
        const userTime = subject.lectureTime.split(',');

        userTime.forEach(time => {
          const d = this.dayTable[time[0]];
          const t = this.timeTable[time[1]];
          this.inputTable[t][d] = '수업';
        })
      })
      // this.dataSource = new MatTableDataSource<InputTable>(this.inputTable)
    });
  }

  constructor(private subService: SubService, private authenticationService: AuthenticationService) {
    // init data set
    this.time.forEach((el, idx) => {
      this.timeTable[el[0]] = idx;
    });

    this.day_ko.forEach((el, idx) => {
      this.dayTable[el] = this.day[idx];
    });

    this.time.forEach(el => {
      const t = new InputTable(el, '', '', '', '', '');
      this.inputTable.push(t);
    });
  }
}


