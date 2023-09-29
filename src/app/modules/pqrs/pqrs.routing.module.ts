import { Routes, RouterModule } from '@angular/router';
import { PqrsComponent } from './pqrs.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', component: PqrsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrsRoutesRoutes { }