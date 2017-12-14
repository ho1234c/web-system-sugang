import { Component, Input } from '@angular/core';
import { AuthenticationService } from './authService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private authenticationService: AuthenticationService) {
    authenticationService.getSession()
  }
}
