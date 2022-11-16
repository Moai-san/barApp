import {Component} from '@angular/core';
import { loginVars } from '../login/loginVars';

@Component(
{
    templateUrl: './botones.html',
    styleUrls: ['./botones.scss']

})
export class botones
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