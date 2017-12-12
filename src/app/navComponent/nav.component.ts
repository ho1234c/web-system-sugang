import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class navComponent {
  name = '정의원';
  department = '소프트웨어';
  grade = 3;
  maxPoint = 21;

  showDialog = false;
}
