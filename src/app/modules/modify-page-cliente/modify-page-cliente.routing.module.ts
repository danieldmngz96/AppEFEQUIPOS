import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyPageClienteComponent } from './modify-page-cliente.component';





const routes: Routes = [
  { path: '', component: ModifyPageClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModifyPageClienteRoutes { }
