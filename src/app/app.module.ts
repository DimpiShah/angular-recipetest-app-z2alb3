import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ShoppingModule} from './shopping/shopping.module';
import {MenuModule} from './menu/menu.module';
import {RecipeModule} from './recipe/recipe.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ShoppingModule,MenuModule,RecipeModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
