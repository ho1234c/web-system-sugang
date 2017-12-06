import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  displayedColumns = ['time', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

const ELEMENT_DATA: Element[] = [
  {time: 'Z (08:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'Z (08:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'A (09:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'A (09:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'A (10:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'B (10:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'B (11:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'B (11:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'C (12:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'C (12:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'C (13:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'D (13:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'D (14:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'D (14:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'E (15:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'E (15:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'E (16:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'F (16:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'F (17:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'F (17:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'G (18:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'G (18:30)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  {time: 'G (19:00)', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''},
  ]
