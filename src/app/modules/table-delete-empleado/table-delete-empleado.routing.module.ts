import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDeleteEmpleadoComponent } from './table-delete-empleado.component';


const routes: Routes = [
  { path: '', component: TableDeleteEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableDeleteEmpleadoRoutes { }
