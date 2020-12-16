import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipmentDetailPageComponent, ShipmentEditPageComponent, ShipmentListPageComponent} from './pages';

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
  },
  {
    path: 'create',
    pathMatch: 'prefix',
    component: ShipmentEditPageComponent
  },
  {
    path: 'detail/:id',
    pathMatch: 'prefix',
    component: ShipmentDetailPageComponent
  },
  {
    path: 'edit/:id',
    pathMatch: 'prefix',
    component: ShipmentEditPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
