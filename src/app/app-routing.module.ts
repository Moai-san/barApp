import { RouterModule, Routes } from '@angular/router';
import { menu } from "./menu";
import { botones } from './botones';

const routes: Routes = 
[
  { path: '', component: botones}

];

export const AppRoutingModule = RouterModule.forRoot(routes);
