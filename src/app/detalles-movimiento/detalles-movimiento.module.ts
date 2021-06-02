import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesMovimientoPageRoutingModule } from './detalles-movimiento-routing.module';

import { DetallesMovimientoPage } from './detalles-movimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesMovimientoPageRoutingModule
  ],
  declarations: [DetallesMovimientoPage]
})
export class DetallesMovimientoPageModule {}
