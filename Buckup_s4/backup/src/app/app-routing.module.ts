import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursoComponent } from './component/recurso/recurso.component';
import { RecursoInsertarComponent } from './component/recurso/recurso-insertar/recurso-insertar.component';
const routes: Routes = [
  {
path:'recurso',
component:RecursoComponent,
children:[

  {

    path:'recursosinsertar',
    component:RecursoInsertarComponent,
  },
],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
