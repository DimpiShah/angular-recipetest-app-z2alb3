import { Injectable } from '@angular/core';
import {ItemType} from '../models/item-type';
import {SubType} from '../models/sub-type.enum';
import {Unit} from '../models/unit.enum';
import {Item} from '../models/item';
import { Subject  } from 'rxjs';
@Injectable()
export class ItemService {
 items : Item[] = [];
  public itemsChanged = new Subject <Item[]>();
  constructor() { }

  getItems()
  {
      console.log("----------inise");
     const itemType = new ItemType("Food",SubType.Veg);
      this.items.push(new Item("Onions",itemType,23,Unit.kilogram));
      
    this.itemsChanged.next(this.items.slice());

  }

  getItem(name:string)
  {
        const itemIndex = this.items.findIndex(item => item.name === name);
        return this.items[itemIndex];
  }

  addItem(item : Item)
  {
    this.items.push(item);
  }

  deleteItem(name :string)
  {
    const itemIndex = this.items.findIndex(item => item.name === name);
    this.items.splice(itemIndex);
  }
}