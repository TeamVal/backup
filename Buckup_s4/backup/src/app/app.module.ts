import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursolistarComponent } from './component/recurso/recurso-lista/recurso-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecursoComponent } from './component/recurso/recurso.component';
import { HttpClientModule } from '@angular/common/http';
import{MatTableModule} from '@angular/material/table';
import { RecursoInsertarComponent } from './component/recurso/recurso-insertar/recurso-insertar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    RecursoComponent, 
    RecursolistarComponent, 
    RecursoInsertarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
