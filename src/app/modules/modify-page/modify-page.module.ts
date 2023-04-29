import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyPageComponent } from './modify-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ModifyPageRoutes } from './modify-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    ModifyPageRoutes
  ],
  declarations: [ModifyPageComponent]
})
export class ModifyPageModule { }
