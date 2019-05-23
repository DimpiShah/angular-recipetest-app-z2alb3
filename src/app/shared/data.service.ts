import { Injectable } from '@angular/core';
import {Item} from '../models/item';
import {ItemType} from '../models/item-type';
import {SubType} from '../models/sub-type.enum';
import {Unit} from '../models/unit.enum';

@Injectable()
export class DataService {
items : Item[] = [];
  constructor( ) { }
 
 loadItems()
 {
    const itemType = new ItemType("Food",SubType.Veg);
    this.items.push(new Item("Onions",itemType,23,Unit.kilogram));
   return this.items;

 }
  



}