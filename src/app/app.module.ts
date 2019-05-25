import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,FormGroup,FormControl } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ShoppingModule} from './shopping/shopping.module';
import {MenuModule} from './menu/menu.module';
import {RecipeModule} from './recipe/recipe.module';
import {ItemModule} from './item/item.module';
import { ItemService } from './shared/item.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule,ShoppingModule,ItemModule,MenuModule,RecipeModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemService]
})
export class AppModule { }
