import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PqrsComponent } from './modules/pqrs/pqrs.component';
import { LandingPrincipalComponent } from './modules/landing-principal/landing-principal.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPrincipalComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    component: HomeComponent,
  },
/*   {
    path: 'pqrs',
    component: PqrsComponent,
  }, */
  {
    path: 'bienvenido',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./modules/reportes/reportes.module').then(m => m.ReportesModule)
  },

  //Rutas para inventario
  {
    path: 'inventario',
    children: [
      {
        path: 'modificar',
        loadChildren: () => import('./modules/Inventario/table-modify-machine/modify-machine.module').then(m => m.ModifyMachineModule)
      },
      {
        path: 'modificar/:id',
        loadChildren: () => import('./modules/Inventario/modal-modify-page-machine/modify-page.module').then(m => m.ModifyPageModule)
      },
      {
        path: 'movimientos',
        loadChildren: () => import('./modules/Inventario/movimientos/movimientos.module').then(m => m.MovimientosModule)
      },
      {
        path: 'eliminar',
        loadChildren: () => import('./modules/Inventario/table-delete-machine/delete-machine.module').then(m => m.DeleteMachineModule)
      },
      {
        path: 'agregar',
        loadChildren: () => import('./modules/Inventario/table-add-machine/add-machine.module').then(m => m.AddMachineModule)
      },

    ]
  },

  //Rutas para despachos
  {
    path: 'despachos',
    children: [
      {
        path: 'all',
        loadChildren: () => import('./modules/table-despachos/table-despachos.module').then(m => m.TableDespachosModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./modules/add-despachos/add-despachos.module').then(m => m.AddDespachosModule)
      },
      {
        path: 'add-form',
        loadChildren: () => import('./modules/despachos-add-form/despachos-add-form.module').then(m => m.DespachosAddFormModule)
      },
    ]
  },
    //Rutas para clientes
    {
      path: 'clientes',
      children: [
        {
          path: 'all',
          loadChildren: () => import('./modules/table-clientes/table-clientes.module').then(m => m.TableClientesModule)
        },
        {
          path: 'add',
          loadChildren: () => import('./modules/add-form-cliente/add-form-cliente.module').then(m => m.AddFormClienteModule)
        },
        {
          path: 'modificar/:id',
          loadChildren: () => import('./modules/modify-page-cliente/modify-page-cliente.module').then(m => m.ModifyPageClienteModule)
        },
      ]
    },
        //Rutas para empleados
        {
          path: 'empleados',
          children: [
            {
              path: 'all',
              loadChildren: () => import('./modules/Empleados/table-empleados/empleados.module').then(m => m.EmpleadosModule)
            },
            {
              path: 'añadir-empleado',
              loadChildren: () => import('./modules/Empleados/add-empleado/add-empleado.module').then(m => m.AddEmpleadoModule)
            },
             {
              path: 'modificar',
              loadChildren: () => import('./modules/Empleados/table-modify-empleado/modify-empleado.module').then(m => m.ModifyEmpleadoModule)
            },
            {
              path: 'page',
              loadChildren: () => import('./modules/Empleados/modify-page-empleados/modify-page-empleados.module').then(m => m.ModifyPageEmpleadosModule)
            },
            {
              path: 'eliminar-empleado',
              loadChildren: () => import('./modules/Empleados/table-delete-empleado/table-delete-empleado.module').then(m => m.TableDeleteEmpleadoModule)
            }
          ]
        },
         //Rutas para pqrs
         {
          path: 'pqrs',
          children: [
            {
              path: 'enviar',
              loadChildren: () => import('./modules/pqrs/pqrs.module').then(m => m.PqrsModule)
            },
            {
              path: 'table',
              loadChildren: () => import('./modules/table-pqrs/table-pqrs.module').then(m => m.TablePqrsModule)
            }
          ]
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
