import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { loginVars } from './loginVars';

@Component(
{
    templateUrl: './login.html',
    styleUrls: ['./login.scss']

})
export class login implements OnInit
{
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (loginVars.getIsLogged()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    console.log(username+password);
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        loginVars.setSessionID((data.rut),(data.uname));
        loginVars.setIsLogged(true);
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}