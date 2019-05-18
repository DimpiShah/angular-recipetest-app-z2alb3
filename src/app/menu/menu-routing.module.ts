import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {MenuComponent} from './menu.component';

const routes : Routes = [
  {
      path:'menus',
      component : MenuComponent
  }
];


@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class MenuRoutingModule { }