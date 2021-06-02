import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaMovimientosPageRoutingModule } from './tabla-movimientos-routing.module';

import { TablaMovimientosPage } from './tabla-movimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaMovimientosPageRoutingModule
  ],
  declarations: [TablaMovimientosPage]
})
export class TablaMovimientosPageModule {}
