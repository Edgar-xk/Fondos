import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modificaciones',
    loadChildren: () => import('./modificaciones/modificaciones.module').then( m => m.ModificacionesPageModule)
  },
  {
    path: 'import-modal',
    loadChildren: () => import('./import-modal/import-modal.module').then( m => m.ImportModalPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tabla-movimientos',
    loadChildren: () => import('./tabla-movimientos/tabla-movimientos.module').then( m => m.TablaMovimientosPageModule)
  },
  {
    path: 'detalles-movimiento',
    loadChildren: () => import('./detalles-movimiento/detalles-movimiento.module').then( m => m.DetallesMovimientoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
