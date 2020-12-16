import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthData, ShipmentData} from '@core/data';
import {AuthService, ShipmentService} from '@core/services';
import {throwIfAlreadyLoaded} from './module-import-guard';

const DATA_SERVICES = [
  {provide: AuthData, useClass: AuthService},
  {provide: ShipmentData, useClass: ShipmentService},
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
