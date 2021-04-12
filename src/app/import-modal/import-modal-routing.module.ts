import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportModalPage } from './import-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ImportModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportModalPageRoutingModule {}
