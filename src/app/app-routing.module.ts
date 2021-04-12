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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
