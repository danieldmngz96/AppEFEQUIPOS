import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyMachineComponent } from './modify-machine.component';

const routes: Routes = [
  { path: '', component: ModifyMachineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModifyMachineRoutes { }
