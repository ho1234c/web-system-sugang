import { Component, ViewChild, OnInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Announce } from '../announce';
import { SubService } from '../subService';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {
  dataSource: MatTableDataSource<Announce>;
  announceColumns = ['announceId', 'title'];

  constructor(private subService: SubService) {}

  ngOnInit() {
    this.loadNotice();
  }

  loadNotice(): any {
    this.subService.loadNotice().then((result: Array<Announce>) => {
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
