import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpleadoComponent } from './add-empleado.component';


const routes: Routes = [
  { path: '', component: AddEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddEmpleadoRoutes { }

