import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyMachinePageComponent } from './modify-machine-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ModifyMachinePageRoutes } from './modify-machine-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    ModifyMachinePageRoutes
  ],
  declarations: [ModifyMachinePageComponent]
})
export class ModifyMachinePageModule { }
