import {Component} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { loginVars } from '../login/loginVars';

@Component(
{
    selector: 'navBar',
    templateUrl: './navBar.html',
    styleUrls: ['./navBar.scss']
})

export class navBar
{
    isLoggedIn = false;
    username?: string;


  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = loginVars.getIsLogged();

    if (this.isLoggedIn) {
      this.username = loginVars.getUname(loginVars.getSessionID());
    }
  }

  logout(): void {
    loginVars.setIsLogged(false);
  }
}