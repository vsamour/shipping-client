import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '@app/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DashboardComponent,
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
