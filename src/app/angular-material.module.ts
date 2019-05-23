import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [],
  exports:[MatListModule]
})
export class AngularMaterialModule { }