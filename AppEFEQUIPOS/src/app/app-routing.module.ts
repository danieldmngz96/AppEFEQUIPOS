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
    path: 'eliminar-machine',
    loadChildren: () => import('./modules/table-delete-machine/delete-machine.module').then(m => m.DeleteMachineModule)
  },
  //Rutas para modificar maquinaria io inventario
  {
    path: 'modificar',
    children: [
      {
        path: 'table-machine',
        loadChildren: () => import('./modules/table-modify-machine/modify-machine.module').then(m => m.ModifyMachineModule)
      },
      {
        path: 'page/:id',
        loadChildren: () => import('./modules/modify-page/modify-page.module').then(m => m.ModifyPageModule)
      },
    ]
  },
  {
    path: 'add-machine',
    loadChildren: () => import('./modules/table-add-machine/add-machine.module').then(m => m.AddMachineModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./modules/empleados/empleados.module').then(m => m.EmpleadosModule)
  },
  {
    path: 'añadir-empleado',
    loadChildren: () => import('./modules/add-empleado/add-empleado.module').then(m => m.AddEmpleadoModule)
  },
  {
    path: 'modificar-empleado',
    loadChildren: () => import('./modules/add-empleado/add-empleado.module').then(m => m.AddEmpleadoModule)
  },
  //Rutas para despachos
  {
    path: 'despachos',
    children: [
      {
        path: 'all',
        loadChildren: () => import('./modules/table-despachos/table-despachos.module').then(m => m.TableDespachosModule)
      }
    ]
  },
    //Rutas para clientes
    {
      path: 'clientes',
      children: [
        {
          path: 'all',
          loadChildren: () => import('./modules/table-clientes/table-clientes.module').then(m => m.TableClientesModule)
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
