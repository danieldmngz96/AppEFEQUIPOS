import { Routes, RouterModule } from '@angular/router';
import { TableContratosComponent } from './table-contratos.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: TableContratosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableContratosRoutes { }