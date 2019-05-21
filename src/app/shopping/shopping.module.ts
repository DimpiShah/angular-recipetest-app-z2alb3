import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ShoppingListRoutingModule} from './shopping-list/shopping-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    
  ],
  declarations: [ShoppingListComponent]
})
export class ShoppingModule { }