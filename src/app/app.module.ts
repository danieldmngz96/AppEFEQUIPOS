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
import { ModalAddComponent } from './modules/modal-add/modal-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ModalAddComponent,

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
    AppRoutingModule,
    ReactiveFormsModule,
    FooterModule,
    MatDialogModule,
    NgxMatFileInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
