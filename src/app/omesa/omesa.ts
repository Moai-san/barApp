import {Component} from '@angular/core';
import { AppService } from '../_services/app.service';
import { mesa } from '../_classes/mesa';

@Component(
{
    templateUrl: './omesa.html',
    styleUrls: ['./omesa.scss']
})

export class omesa {
  datos:Array<mesa>=[];
  constructor(public BackEnd:AppService) {}
  ngOnInit(): void
  {
      this.BackEnd.getMesas().subscribe(mesas=>{
        for(let i=0; i<mesas.length ;i++)
        {
          this.datos.push(mesas[i]);
        }
      });
  }

  public setMesaStatus(event:any)
  {
      console.log(event.target.value);
  }
}