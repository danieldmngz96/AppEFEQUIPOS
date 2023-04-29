import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyMachineComponent } from './modify-machine.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ModifyMachineRoutes } from './modify-machine.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    ModifyMachineRoutes
  ],
  declarations: [ModifyMachineComponent]
})
export class ModifyMachineModule { }
