import { Routes, RouterModule } from '@angular/router';
import { ContratosActualesComponent } from './contratos-actuales.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', component: ContratosActualesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosActualesRoutes { }