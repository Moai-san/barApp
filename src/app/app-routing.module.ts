import { RouterModule, Routes } from '@angular/router';
import { botones } from './botones';
import { login } from './login';

const routes: Routes = 
[
  { path: '', component: botones},
  { path: 'login',component: login}

];

export const AppRoutingModule = RouterModule.forRoot(routes);
