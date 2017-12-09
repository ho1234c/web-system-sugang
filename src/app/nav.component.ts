import {Component, Inject} from '@angular/core';
import { MatListModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule,
  MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  appConfig: any;
  menuItems: any[];
  progressBarMode: string;

  name = '정의원';
  department = '소프트웨어';
  grade = 3;
  maxPoint = 21;

  showDialog = false;
}
