import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMachineComponent } from './add-machine.component';

const routes: Routes = [
  { path: '', component: AddMachineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddMachineRoutes { }
