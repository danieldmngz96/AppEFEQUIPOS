import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PqrsComponent } from './pqrs.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FooterModule,
    MaterialModule,
  ],
})
export class PqrsModule { }
