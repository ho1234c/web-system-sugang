import { Routes, RouterModule } from '@angular/router';
import { mainComponent } from './mainComponent/main.component';
import { tableComponent } from './tableComponent/table.component';

const APP_ROUTES: Routes = [
  // {path: '', component: AppComponent},
  {path: 'main', component: mainComponent},
  {path: 'table', component: tableComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
