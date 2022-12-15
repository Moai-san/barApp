import {Component} from '@angular/core';
import { AppService } from '../_services/app.service';
import { producto } from '../_classes/producto';
import { mesa } from '../_classes/mesa';
import { loginVars } from '../login/loginVars'
import { concat } from 'rxjs';

@Component(
{
    templateUrl: './addTo_boleta.html',
    styleUrls: ['./addTo_boleta.scss']
})

export class addTo_boleta
{
    mesas:Array<mesa>=[];
    productos:Array<producto>=[];
    prodTo_add:Array<string>=[]; //arreglo de n elementos donde n es el numero total de productos en inventario, y el valor en cada casilla es la cantidad
    selected:number = 0; //numero de mesa seleccionada en boleta
    isMesaSelected =false;
    constructor(public BackEnd:AppService) {}
    ngOnInit(): void
    {
        this.BackEnd.getMesas().subscribe(mesas=>{
            for(let i=0; i<mesas.length ;i++)
            {
              this.mesas.push(mesas[i]);
            }
          });

        this.BackEnd.getProductos().subscribe(productos=>{
            for(let i=0; i<productos.length ;i++)
            {
                this.productos.push(productos[i]);
            }
        });
    }

    public selectMesa(event:any)
    {  
        this.selected =(event.target.value);
        this.isMesaSelected =true;
        console.log(this.selected);
    }

    public appendTo_pedido()
    {
        var toAppend:string="\"idUsuario\": ".concat(loginVars.getRut(loginVars.getSessionID()));
        toAppend =toAppend.concat(",\n\"mesa\": ".concat(this.selected.toString()),",\n\"pedido\":{");
        //console.log(this.prodTo_add.length);
        for (let i = 0; i < this.prodTo_add.length; i++)
        {
            if(i==0)
            {
                toAppend =toAppend.concat(this.prodTo_add[i].split(",")[1]);
            }
            toAppend =toAppend.concat(this.prodTo_add[i]);
        }
        toAppend =toAppend.concat("\n}")
        this.BackEnd.appendTo_boleta(toAppend);
        
    }

    public updateMesa(event:any, id:number)
    {
        for(let i=0;i<this.prodTo_add.length;i++)
        {
            if(this.prodTo_add[i].startsWith(",\n\"".concat(id.toString(),"\": ")))
            {
                this.prodTo_add[i]=(",\n\"".concat(id.toString(),"\": ",event.target.value));
                return;
            }
        }
        this.prodTo_add.push(",\n\"".concat(id.toString(),"\": ",event.target.value));
        
        //console.log(this.prodTo_add[this.prodTo_add.length-1]);
        //console.log(this.prodTo_add[id]);
        //console.log(id);
        //console.log(event.target.value);
    }
}