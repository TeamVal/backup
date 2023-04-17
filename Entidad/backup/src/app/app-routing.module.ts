import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
const routes: Routes = [
  {
    path: 'estudiantes',
    component: EstudianteComponent,
    children: [
      {
        path: 'estudiantesinsertar',
        component: EstudianteInsertarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
