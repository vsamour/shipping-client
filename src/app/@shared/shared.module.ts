import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

const COMMON_MODULES = [
  CommonModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: [
    COMMON_MODULES
  ],
  exports: [
    COMMON_MODULES
  ]
})
export class SharedModule { }
