import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormClienteComponent } from './add-form-cliente.component';



const routes: Routes = [
  { path: '', component: AddFormClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddFormClienteRoutes { }

