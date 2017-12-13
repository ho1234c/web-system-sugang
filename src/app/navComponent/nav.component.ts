import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  name: string;
  major: string;
  maximum_credit: number;
  grade: number;

  logOn = false;
  showDialog = false;

  isLogin(login: boolean) {
    this.logOn = login;
    const { user } = JSON.parse(localStorage.getItem('currentUser'));
    this.name = user.displayName;
    this.maximum_credit = user.maximum_credit;
    this.grade = user.grade;
    this.major = user.major;
  }

  logout() {
    //this.authenticationService.logout();
  }

}
