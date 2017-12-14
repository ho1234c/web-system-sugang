import { Component } from '@angular/core';
import { AuthenticationService } from '../authService';
import { User } from '../User';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  showDialog: boolean;
  user: User;
  isLogin: boolean;
  _subscription;

  constructor(private authenticationService: AuthenticationService) {
    this.showDialog = false;
    this.user = this.authenticationService.user;
    this._subscription = authenticationService.userChange.subscribe((user: User) => { 
      this.user = user;
      this.isLogin = !!user;
    });
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._subscription.unsubscribe();
   }

  logout() {
    this.authenticationService.logout().then(() => {
      window.alert('success');
    })
  }
}
