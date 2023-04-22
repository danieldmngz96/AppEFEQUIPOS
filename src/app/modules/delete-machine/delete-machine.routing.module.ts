import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteMachineComponent } from './delete-machine.component';

const routes: Routes = [
  { path: '', component: DeleteMachineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DeleteMachineRoutes { }
