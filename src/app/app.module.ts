import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { menu } from './menu'
import { navBar } from './navBar'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    menu,
    navBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
