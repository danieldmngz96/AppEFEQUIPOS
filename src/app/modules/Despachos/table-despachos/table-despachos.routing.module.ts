import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDespachosComponent } from './table-despachos.component';

const routes: Routes = [
  { path: '', component: TableDespachosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableDespachosRoutes { }
