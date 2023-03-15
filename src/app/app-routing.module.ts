import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
/*   {
    path: 'Activity',
    loadChildren: () => import('./modules/actividades/actividades.module').then(m => m.ActividadesModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'cultivos',
    loadChildren: () => import('./modules/cultivos/cultivos.module').then(m => m.CultivosModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./modules/reportes/reportes.module').then(m => m.ReportesModule)
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
