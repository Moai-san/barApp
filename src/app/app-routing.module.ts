import { RouterModule, Routes } from '@angular/router';
import { botones } from './botones';
import { login } from './login';
import { register } from './register/register';
import { omesa } from './omesa'
import { cmesa } from './cmesa'
import { mactuales } from './mactuales'
import { inventario } from './inventario'



const routes: Routes = 
[
  { path: '', component: botones},
  { path: 'login', component: login},
  { path: 'register', component: register},
  //{ path: 'omesa', component: omesa},
  { path: 'cmesa', component: cmesa},
  { path: 'mactuales', component: mactuales},
  { path: 'inventario', component: inventario}

];

export const AppRoutingModule = RouterModule.forRoot(routes);
