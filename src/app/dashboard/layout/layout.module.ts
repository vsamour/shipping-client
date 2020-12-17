import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {COMPONENTS} from './components';
import {LayoutComponent} from './layout.component';


@NgModule({
  declarations: [LayoutComponent, ...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [LayoutComponent, ...COMPONENTS]
})
export class LayoutModule {
}
