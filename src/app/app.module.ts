import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ShoppingModule} from './shopping/shopping.module';
import {MenuModule} from './menu/menu.module';
import {RecipeModule} from './recipe/recipe.module';
import { ItemService } from './shared/item.service';
import { DataService } from './shared/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ShoppingModule,MenuModule,RecipeModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemService, DataService]
})
export class AppModule { }
