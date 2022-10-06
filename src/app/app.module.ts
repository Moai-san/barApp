import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { login } from './login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { menu } from './menu';
import { botones } from './botones';
import { navBar } from './navBar';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    menu,
    botones,
    navBar,
    login
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
