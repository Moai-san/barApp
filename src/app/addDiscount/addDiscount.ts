import {Component} from '@angular/core';
import { AppService } from '../_services/app.service';
import { producto } from '../_classes/producto';

@Component(
{
    templateUrl: './addDiscount.html',
    styleUrls: ['./addDiscount.scss']
})

export class addDiscount
{
    form: any = {
        porcentaje: null,
        minCompra: null,
        descripcion: null
      };
      isSuccessful = false;
      isSignUpFailed = false;
      errorMessage = '';
    constructor(public BackEnd:AppService) {}
    ngOnInit(): void
    {
        //hacer post pa descuento xd
    }
    
    onSubmit(): void
    {
        const { porcentaje, minCompra, descripcion } = this.form;
        var active = document.getElementById("isActive");
        this.BackEnd.postDiscount(porcentaje,minCompra, descripcion,false).subscribe({
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