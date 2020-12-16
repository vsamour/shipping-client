import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@core/guards';

const routes: Routes = [
  {
    path: 'auth',
    pathMatch: 'prefix',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shipment',
    pathMatch: 'prefix',
    canActivate: [AuthGuard],
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
export class AppRoutingModule {
}
