import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import{AngularMaterialModule} from '../angular-material.module';
import { ItemComponent } from './item.component';

const routes:Routes = [
  { path: 'items',   component: ItemComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
      RouterModule.forChild(routes),
      AngularMaterialModule
  ],
    exports:[RouterModule],
  declarations: [ItemComponent]
})
export class ItemModule { }