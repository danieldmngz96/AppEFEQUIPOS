import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './modules/home/home.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { FooterModule } from './shared/footer/footer.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAddComponent } from './modules/Inventario/modal-add-machine/modal-add.component';
import { ModalAddEmpleadoComponent } from './modules/Empleados/modal-add-empleado/modal-add-empleado.component';
import { ModalViewVehiculoComponent } from './modules/Despachos/modal-view-vehiculo/modal-view-vehiculo.component';
import { PqrsComponent } from './modules/pqrs/pqrs.component';
import { LandingPrincipalComponent } from './modules/landing-principal/landing-principal.component';
import { MenuPrincipalComponent } from './shared/menu-principal/menu-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ModalAddComponent,
    ModalAddEmpleadoComponent,
    ModalViewVehiculoComponent,
    PqrsComponent,
    LandingPrincipalComponent,
    MenuPrincipalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FooterModule,
    MatDialogModule,
    NgxMatFileInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
