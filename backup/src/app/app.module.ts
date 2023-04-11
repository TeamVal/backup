import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursolistarComponent } from './component/recurso/recurso-lista/recurso-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecursoComponent } from './component/recurso/recurso.component';
import { HttpClientModule } from '@angular/common/http';
import{MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    RecursoComponent, 
    RecursolistarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
