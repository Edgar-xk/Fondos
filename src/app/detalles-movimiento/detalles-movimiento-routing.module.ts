import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesMovimientoPage } from './detalles-movimiento.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesMovimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesMovimientoPageRoutingModule {}
