import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePqrsComponent } from './table-pqrs.component';

const routes: Routes = [
  { path: '', component: TablePqrsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableRouteRoutes{ }