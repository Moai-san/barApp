import { RouterModule, Routes } from '@angular/router';
import { botones } from './botones';
import { login } from './login';
import { register } from './register/register';

const routes: Routes = 
[
  { path: '', component: botones},
  { path: 'login', component: login},
  { path: 'register', component: register}

];

export const AppRoutingModule = RouterModule.forRoot(routes);
