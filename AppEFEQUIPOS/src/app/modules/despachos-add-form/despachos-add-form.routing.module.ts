import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespachosAddFormComponent } from './despachos-add-form.component';


const routes: Routes = [
  { path: '', component: DespachosAddFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DespachosAddFormRoutes { }

