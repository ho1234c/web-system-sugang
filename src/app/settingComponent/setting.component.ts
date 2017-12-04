import { Component } from '@angular/core';
import { CourseSet } from '../mock.course';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
})
export class SettingComponent {
  courseList = CourseSet;

}
