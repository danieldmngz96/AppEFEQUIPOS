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
  gotoModifyEmpleado(){
    this.router.navigate(['/empleados/modificar']);
  }
}
