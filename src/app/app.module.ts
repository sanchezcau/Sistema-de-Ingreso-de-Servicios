import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomDatePipe} from './custom.datepipe';
import { IngresosComponent } from './ingresos/ingresos.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDatePipe,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
