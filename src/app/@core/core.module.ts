import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {httpInterceptorProviders} from './interceptors';
import {AuthData, ItemData, ShipmentData} from './data';
import {AuthService, ItemService, ShipmentService} from './services';
import {throwIfAlreadyLoaded} from './module-import-guard';

const DATA_SERVICES = [
  {provide: AuthData, useClass: AuthService},
  {provide: ShipmentData, useClass: ShipmentService},
  {provide: ItemData, useClass: ItemService},
  ...httpInterceptorProviders
];

const CORE_PROVIDERS = [
  ...DATA_SERVICES
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return <ModuleWithProviders<CoreModule>>{
      ngModule: CoreModule,
      providers: [
        ...CORE_PROVIDERS,
      ],
    };
  }
}
