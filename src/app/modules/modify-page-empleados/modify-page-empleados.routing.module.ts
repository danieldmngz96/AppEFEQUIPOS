import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyPageEmpleadosComponent } from './modify-page-empleados.component';




const routes: Routes = [
  { path: '', component: ModifyPageEmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyPageEmpleadosRoutes { }
