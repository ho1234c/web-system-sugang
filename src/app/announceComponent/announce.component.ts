import {Component, ViewChild} from '@angular/core';
import {Input} from '@angular/compiler/src/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AnnounceSet } from '../mock.announce';
import {Announce} from '../announce';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent {

  announceList = AnnounceSet;
  @ViewChild('form') myform;

  announceColumns = ['announceId', 'title'];
  dataSource: MatTableDataSource<Announce>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const announces: Announce[] = [];
    const temp = this.announceList.length;
    for (let i = 0; i < temp; i++) { announces.push(this.announceList.pop()); }

    this.dataSource = new MatTableDataSource(announces);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
