import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CultivosComponent } from './cultivos.component';


const routes: Routes = [
  { path: '', component: CultivosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CultivosRoutingModule { }
