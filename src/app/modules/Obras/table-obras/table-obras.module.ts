import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableObrasComponent } from './table-obras.component';
import { TableObrasRoutes } from './table-obras.routing.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    TableObrasRoutes,
    MenuModule,
    FooterModule,
  ],
  declarations: [TableObrasComponent]
})
export class TableObrasModule { }
