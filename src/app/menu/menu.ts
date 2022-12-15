import {Component} from '@angular/core';
import { loginVars } from '../login/loginVars';

@Component(
{
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']

})
export class menu
{
    isLoggedIn = false;
    isAdmin =false;
    ngOnInit(): void {
        if (loginVars.getIsLogged()) {
          this.isLoggedIn = true;
        }
        if (loginVars.getIsAdmin()) {
            this.isAdmin = true;
        }
      }
}