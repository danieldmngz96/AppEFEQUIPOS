import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'Nuevo-inventario',
    loadChildren: () => import('./modules/actividades/actividades.module').then(m => m.ActividadesModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./modules/reportes/reportes.module').then(m => m.ReportesModule)
  },
  {
    path: 'movimientos-inventario',
    loadChildren: () => import('./modules/movimientos/movimientos.module').then(m => m.MovimientosModule)
  },
  {
    path: 'eliminar-equipo',
    loadChildren: () => import('./modules/delete-machine/delete-machine.module').then(m => m.DeleteMachineModule)
  },
  {
    path: 'modificar-inventario/:id',
    loadChildren: () => import('./modules/modify-machine/modify-machine.module').then(m => m.ModifyMachineModule)
  },
  {
    path: 'add-equipo',
    loadChildren: () => import('./modules/add-machine/add-machine.module').then(m => m.AddMachineModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./modules/empleados/empleados.module').then(m => m.EmpleadosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
