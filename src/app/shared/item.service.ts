import { Injectable } from '@angular/core';
import {Item} from '../models/item';
import { BehaviorSubject  } from 'rxjs';
import{DataService} from './data.service';
@Injectable()
export class ItemService {
 items : Item[] = [];
  public itemsChanged = new BehaviorSubject <Item[]>([]);
  constructor(private dataService:DataService) { }

  getItems()
  {
    Object.assign(this.items,this.dataService.loadItems());
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