import {Component, OnInit} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})

export class noticeComponent implements OnInit {
  noticeDBs: Object;
  panelOpenState: boolean;
  ngOnInit() {
    this.panelOpenState = false;
    this.loadNotice();
  }
  constructor(private httpService: HttpService) {}

  loadNotice(): any {
    this.httpService.loadNoticeService().subscribe( result => this.noticeDBs = result);
  }

}
