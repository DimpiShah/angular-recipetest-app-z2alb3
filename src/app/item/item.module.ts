import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { ItemComponent } from './item.component';
const routes:Routes = [
  { path: 'items',   component: ItemComponent}
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ],
    exports:[RouterModule],
  declarations: [ItemComponent]
})
export class ItemModule { }