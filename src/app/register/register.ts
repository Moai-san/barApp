import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component(
{
    templateUrl: './register.html',
    styleUrls: ['./register.scss']

})
export class register implements OnInit {
    form: any = {
      rut: null,
      uname: null,
      password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
  
    constructor(private authService: AuthService) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(): void {
      const { rut, uname, password } = this.form;
      this.authService.register(rut,uname, password,123).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  }
  