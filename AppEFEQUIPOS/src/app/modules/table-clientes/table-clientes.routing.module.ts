import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableClientesComponent } from './table-clientes.component';


const routes: Routes = [
  { path: '', component: TableClientesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableClientesRoutes { }
