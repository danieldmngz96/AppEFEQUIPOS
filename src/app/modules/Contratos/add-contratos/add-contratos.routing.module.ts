import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContratosComponent } from './add-contratos.component';

const routes: Routes = [
  { path: '', component: AddContratosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class  AddContratosRoutes{}
