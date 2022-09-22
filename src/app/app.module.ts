import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { menu } from './menu';
import { botones } from './botones';
import { navBar } from './navBar';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    menu,
    botones,
    navBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
