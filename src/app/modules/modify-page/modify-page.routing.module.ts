import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyPageComponent } from './modify-page.component';


const routes: Routes = [
  { path: '', component: ModifyPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyPageRoutes { }
