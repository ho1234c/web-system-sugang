import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '정의원';
  department = '소프트웨어';
  grade = 3;
  maxPoint = 21;
}
