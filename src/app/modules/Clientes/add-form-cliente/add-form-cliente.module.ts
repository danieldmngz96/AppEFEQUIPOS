import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepper } from '@angular/cdk/stepper';
import { AddFormClienteComponent } from './add-form-cliente.component';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFormClienteRoutes } from './add-form-cliente.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FooterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AddFormClienteRoutes
  ],
  declarations: [AddFormClienteComponent],
  providers: [CdkStepper]
})
export class AddFormClienteModule { }
