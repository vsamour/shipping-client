import {NgModule} from '@angular/core';
import {COMPONENTS} from './components';
import {PAGES} from './pages';
import {SharedModule} from '@shared/shared.module';

import {ShipmentRoutingModule} from './shipment-routing.module';


@NgModule({
  declarations: [
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    ShipmentRoutingModule
  ]
})
export class ShipmentModule {
}
