import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import {RecipeRoutingModule} from './recipe-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  declarations: [RecipeComponent]
})
export class RecipeModule { }