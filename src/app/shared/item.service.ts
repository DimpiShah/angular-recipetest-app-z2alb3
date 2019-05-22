import { Injectable } from '@angular/core';
import {Item} from '../models/item';

@Injectable()
export class ItemService {
 items : Item[] = [];
  constructor() { }

  getItems()
  {
    return this.items.slice();
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