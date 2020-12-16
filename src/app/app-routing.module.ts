import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    pathMatch: 'prefix',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shipment',
    pathMatch: 'prefix',
    loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shipment'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
