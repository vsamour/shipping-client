import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '@app/dashboard/layout/layout.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
