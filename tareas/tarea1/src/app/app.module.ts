import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { Tarea2Component } from './tarea2/tarea2.component';
import { WarningComponent } from './warning/warningalert.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    Tarea2Component,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
