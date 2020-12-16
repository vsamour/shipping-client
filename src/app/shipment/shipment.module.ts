import {NgModule} from '@angular/core';
import {PAGES} from './pages';
import {SharedModule} from '@shared/shared.module';

import {ShipmentRoutingModule} from './shipment-routing.module';


@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    SharedModule,
    ShipmentRoutingModule
  ]
})
export class ShipmentModule {
}
