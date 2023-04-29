import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMachineComponent } from './add-machine.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { AddMachineRoutes } from './add-machine.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    AddMachineRoutes,
    FormsModule
  ],
  declarations: [AddMachineComponent]
})
export class AddMachineModule { }
