import { Injectable } from '@angular/core';
import {Item} from '../models/item';
import { Subject } from 'rxjs';
import{DataService} from './data.service';
@Injectable()
export class ItemService {
 items : Item[] = [];
  public itemsChanged = new Subject<Item[]>();
  constructor(private dataService:DataService) { }

  getItems()
  {
    Object.assign(this.items,this.dataService.loadItems());
    const allItems = this.items.slice();
        console.log("--------"+allItems.length);
    this.itemsChanged.next(allItems);
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