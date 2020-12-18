import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {COMPONENTS} from './components';
import {CONTAINERS} from './containers';
import {LayoutComponent} from './layout.component';


@NgModule({
  declarations: [LayoutComponent, ...COMPONENTS, ...CONTAINERS],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [LayoutComponent, ...COMPONENTS]
})
export class LayoutModule {
}
