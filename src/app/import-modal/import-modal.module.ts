import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportModalPageRoutingModule } from './import-modal-routing.module';

import { ImportModalPage } from './import-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportModalPageRoutingModule
  ],
  declarations: [ImportModalPage]
})
export class ImportModalPageModule {}
