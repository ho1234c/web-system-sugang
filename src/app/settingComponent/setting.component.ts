import { Component } from '@angular/core';
import { CourseSet } from '../mock.course';
<<<<<<< HEAD
import { Course } from '../course';
import { FormControl } from '@angular/forms';
=======
>>>>>>> e2bdd12ea11c2df1f5845d09b2cf8a8d2ed6eccb

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  selected;
  majorName: string[] = ['소프트웨어', '미디어', '전자공학', '국방디지털'];

}
