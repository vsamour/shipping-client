import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FORMS} from '@shared/forms';

const COMMON_MODULES = [
  CommonModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    FORMS
  ],
  imports: [
    COMMON_MODULES
  ],
  exports: [
    COMMON_MODULES,
    FORMS
  ]
})
export class SharedModule { }
