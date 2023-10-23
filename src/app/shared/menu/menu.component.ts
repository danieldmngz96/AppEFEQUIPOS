import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  panelOpenState = false;
  isHandset$: Observable<BreakpointState | boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset);
  }



  ngOnInit() {
  }
  //RUTAS DE EMPELADOS
  gotoModifyEmpleado(){
    this.router.navigate(['/empleados/modificar']);
  }
  gotoAddEmpleado(){
    this.router.navigate(['/empleados/añadir-empleado']);
  }
  gotoDeleteEmpleado(){
    this.router.navigate(['/empleados/eliminar-empleado']);
  }
  //RUTAS DE INVENTARIO
  gotoModifyinventario(){
    this.router.navigate(['/inventario/modificar']);
  }
  gotoAddinventario(){
    this.router.navigate(['/inventario/agregar']);
  }
  gotoDeleteinventario(){
    this.router.navigate(['/inventario/eliminar']);
  }
  gotoInventario(){
    this.router.navigate(['/inventario/movimientos']);
  }
  gotoContratos(){
    this.router.navigate(['/contratos/actuales']);
  }
  gotoContratosAdd(){
    this.router.navigate(['/contratos/añadir']);
  }
}
