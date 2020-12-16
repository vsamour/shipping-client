import {NgModule} from '@angular/core';
import {COMPONETS} from '@app/auth/components';
import {SharedModule} from '@shared/shared.module';

import {AuthRoutingModule} from './auth-routing.module';
import {PAGES} from './pages';


@NgModule({
  declarations: [
    ...PAGES,
    ...COMPONETS
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
