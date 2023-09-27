import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { LandingPrincipalComponent } from './landing-principal.component';
import { MenuPrincipalModule } from 'src/app/shared/menu-principal/menu-principal.module';
import { MaterialModule } from 'src/app/shared/material/material.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterModule,
    MenuPrincipalModule,
    FooterModule,
    MaterialModule,
  ]
})
export class LandingPrincipalModule { }
