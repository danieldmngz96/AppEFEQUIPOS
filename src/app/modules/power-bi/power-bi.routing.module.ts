import { Routes, RouterModule } from '@angular/router';
import { PowerBiComponent } from './power-bi.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: '', component: PowerBiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PowerBiRoutes { }