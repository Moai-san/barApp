import { RouterModule, Routes } from '@angular/router';
import { botones } from './botones';
import { login } from './login';
import { register } from './register';
import { omesa } from './omesa'
import { cmesa } from './cmesa'
import { mactuales } from './mactuales'
import { inventario } from './inventario'
import { addDiscount } from './addDiscount';
import { addTo_boleta } from './addTo_boleta';



const routes: Routes = 
[
  { path: '', component: botones},
  { path: 'login', component: login},
  { path: 'register', component: register},
  { path: 'omesa', component: omesa},
  { path: 'cmesa', component: cmesa},
  { path: 'mactuales', component: mactuales},
  { path: 'inventario', component: inventario},
  { path: 'addDiscount', component: addDiscount},
  { path: 'addToBoleta', component: addTo_boleta},
  { path: '**', component: botones}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
