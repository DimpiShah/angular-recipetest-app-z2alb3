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
    
      return this.items.slice();
  }

  getItem(name:string)
  {
        const itemIndex = this.items.findIndex(item => item.name === name);
        if(itemIndex > 0)
        {
        return this.items[itemIndex];
        }
        else
        {
          return null;
        }
  }


  addItem(item : Item)
  {
    this.items.push(item);
    
      this.subject.next(this.items);
  }

  deleteItem(name :string)
  {
    const itemIndex = this.items.findIndex(item => item.name === name);
    this.items.splice(itemIndex);
  }

  saveItem(item:Item,index:number)
  {
  
    const existingItem = this.items[index];
    Object.assign(existingItem,item);
    this.subject.next(this.items); 
  }
}