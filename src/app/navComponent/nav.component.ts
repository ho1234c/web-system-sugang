import {Component} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  //@Output() isLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  name: string;
  major: string;
  maximum_credit: number;
  grade: number;

  logOn = false;
  showDialog = false;

  islogin(login: boolean) {
    this.logOn = login;
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.name = user.displayName;
    this.maximum_credit = user.maximum_credit;
    this.grade = user.grade;
    this.major = user.major;
  }

  logout() {
    //this.authenticationService.logout();
  }

}
