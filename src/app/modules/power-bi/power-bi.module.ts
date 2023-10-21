import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerBiComponent } from './power-bi.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { PowerBiRoutes } from './power-bi.routing.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    PowerBiRoutes,
    MenuModule,
    FooterModule,
  ],
  declarations: [PowerBiComponent]
})
export class PowerBiModule { }
