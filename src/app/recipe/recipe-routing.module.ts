import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {RecipeComponent} from './recipe.component';

const routes : Routes = [
  {
      path:'recipes',
      component : RecipeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class RecipeRoutingModule { }