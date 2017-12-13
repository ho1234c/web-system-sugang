import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './mainComponent/main.component';
import { TableComponent } from './tableComponent/table.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'table', component: TableComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
