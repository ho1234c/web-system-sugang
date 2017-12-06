import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { TableComponent } from './table.component';
import {AppComponent} from './app.component';

const APP_ROUTES: Routes = [
  // {path: '', component: AppComponent},
  {path: 'main', component: MainComponent},
  {path: 'table', component: TableComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
