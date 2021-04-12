import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificacionesPageRoutingModule } from './modificaciones-routing.module';

import { ModificacionesPage } from './modificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificacionesPageRoutingModule
  ],
  declarations: [ModificacionesPage]
})
export class ModificacionesPageModule {}
