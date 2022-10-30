import {Component} from '@angular/core';
import { AppService } from '../_services/app.service';
import { producto } from '../_classes/producto';

@Component(
{
    templateUrl: './inventario.html',
    styleUrls: ['./inventario.scss']
})

export class inventario
{
    datos:Array<producto>=[];
    constructor(public BackEnd:AppService) {}
    ngOnInit(): void
    {
        this.BackEnd.getProductos().subscribe(productos=>{
            for(let i=0; i<productos.length ;i++)
            {
                this.datos.push(productos[i]);
            }
        });
    }
}