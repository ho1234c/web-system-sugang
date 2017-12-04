import {Component} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  name = '정의원';
  department = '소프트웨어';
  grade = 3;
  maxPoint = 21;
}
