import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDespachosComponent } from './add-despachos.component';


const routes: Routes = [
  { path: '', component: AddDespachosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddDespachosRoutes { }

