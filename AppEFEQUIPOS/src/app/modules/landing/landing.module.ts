import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-rounting.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    MenuModule,
    FooterModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
