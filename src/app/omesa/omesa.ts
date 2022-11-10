import {Component} from '@angular/core';
import { AppService } from '../_services/app.service';
import { mesa } from '../_classes/mesa';

@Component(
{
    templateUrl: './omesa.html',
    styleUrls: ['./omesa.scss']
})

export class omesa {
  selected:number =0
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

  public selectMesa(event:any)
  {  
    this.selected =(event.target.value);
    console.log(this.selected);
  }

  public setMesaStatus()
  {
    this.BackEnd.mod_mesaStatus(this.selected).subscribe({next: (value: any) =>
      {
        location.assign('')
      }});
  }
}