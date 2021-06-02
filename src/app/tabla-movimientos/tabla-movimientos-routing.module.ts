import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaMovimientosPage } from './tabla-movimientos.page';

const routes: Routes = [
  {
    path: '',
    component: TablaMovimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaMovimientosPageRoutingModule {}
