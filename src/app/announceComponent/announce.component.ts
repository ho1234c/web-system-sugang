import { Component, ViewChild, OnInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AnnounceSet } from '../mock.announce';
import { Announce } from '../announce';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {
  dataSource: MatTableDataSource<Announce>;
  announceColumns = ['announceId', 'title'];

  constructor(private httpService: HttpService) {}
  
  ngOnInit() {
    this.loadNotice();
  }

  loadNotice(): any {
    this.httpService.loadNoticeService().subscribe((result: Array<Announce>) => {
      result.map((el, idx) => el.announceId = idx);
      this.dataSource = new MatTableDataSource(result);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
