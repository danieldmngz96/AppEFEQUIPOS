import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableObrasComponent } from './table-obras.component';

const routes: Routes = [
  { path: '', component: TableObrasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableObrasRoutes { }