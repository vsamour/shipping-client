import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipmentListPageComponent} from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    pathMatch: 'prefix',
    component: ShipmentListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
