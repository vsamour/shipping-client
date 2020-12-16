import {NgModule} from '@angular/core';
import {COMPONENTS} from '@app/auth/components';
import {SharedModule} from '@shared/shared.module';

import {AuthRoutingModule} from './auth-routing.module';
import {PAGES} from './pages';


@NgModule({
  declarations: [
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
