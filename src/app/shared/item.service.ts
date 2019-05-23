import { Injectable } from '@angular/core';
import {ItemType} from '../models/item-type';
import {SubType} from '../models/sub-type.enum';
import {Unit} from '../models/unit.enum';
import {Item} from '../models/item';
import { Subject  } from 'rxjs';

@Injectable()
export class ItemService {
private items : Item[] = [];
  public subject = new Subject <Item[]>();
  constructor() { }

  getItems()
  {
      const itemType = new ItemType("Food",SubType.Veg);
      this.items.push(new Item("Onions",itemType,23,Unit.kilogram));
      this.subject.next(this.items);
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