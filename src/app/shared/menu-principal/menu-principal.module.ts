import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [],
  exports: []
})
export class MenuPrincipalModule { }
