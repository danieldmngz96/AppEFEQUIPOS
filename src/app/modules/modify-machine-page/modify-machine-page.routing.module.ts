import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyMachinePageComponent } from './modify-machine-page.component';



const routes: Routes = [
  { path: '', component: ModifyMachinePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModifyMachinePageRoutes { }
