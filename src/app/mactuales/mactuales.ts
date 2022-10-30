import {Component, OnInit} from '@angular/core';
import { AppService } from '../_services/app.service';
import { mesa } from '../_classes/mesa';

@Component(
{
    templateUrl: './mactuales.html',
    styleUrls: ['./mactuales.scss']
})

export class mactuales implements OnInit {
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
}