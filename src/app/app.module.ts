import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReqresModule } from "reqres";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReqresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
