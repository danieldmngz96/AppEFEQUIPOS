import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CultivosComponent } from './cultivos.component';
import { CultivosRoutingModule } from './cultivos-rounting.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    CultivosRoutingModule,
    MaterialModule,
    MenuModule,
    FooterModule
  ],
  declarations: [CultivosComponent]
})
export class CultivosModule { }
