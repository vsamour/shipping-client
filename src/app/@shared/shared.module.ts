import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LottieModule} from 'ngx-lottie';
import {COMPONENTS} from './components';
import {FORMS} from '@shared/forms';

const COMMON_MODULES = [
  CommonModule,
  ReactiveFormsModule,

  FontAwesomeModule,
  LottieModule
];

@NgModule({
  declarations: [
    FORMS,
    COMPONENTS
  ],
  imports: [
    COMMON_MODULES
  ],
  exports: [
    COMMON_MODULES,
    FORMS,
    COMPONENTS
  ]
})
export class SharedModule { }
