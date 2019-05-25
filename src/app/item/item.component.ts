import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup,FormControl, Validators ,FormsModule} from '@angular/forms';
import {ItemType} from '../models/item-type';
import {SubType} from '../models/sub-type.enum';
import {Unit} from '../models/unit.enum';
import { Subject  } from 'rxjs';
import{ItemService} from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
public items : Item[];
public units : string[];
public itemTypes : string[];
public subypes : string[];
public editing:boolean = false;
public editingItemIndex:number;
itemForm = new FormGroup({
    name: new FormControl(''),
    itemType: new FormControl(''),
    unit: new FormControl(''),
    subType:new FormControl(''),
    amount : new FormControl('')
  });

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.units  = Object.keys(Unit);
    this.subypes  = Object.keys(SubType);
     this.items = this.itemService.getItems();
     this.itemTypes = this.items.map(item => item.type.name);
     this.units = this.units.slice(this.units.length / 2);
     this.subypes = this.subypes.slice(this.subypes.length / 2);
     this.itemService.subject.subscribe(
       (response:Item[]) =>
       {
         this.items = response
       }
     );
     
  }

  EditItem(index:number)
  {
     this.editing = true;
    this.editingItemIndex = index;
    const itemToEdit = this.items[index];
     this.itemForm.patchValue({
       name:itemToEdit.name,
       itemType : itemToEdit.type.name,
       unit:itemToEdit.unit,
       subType:itemToEdit.type.subType,
       amount:itemToEdit.amount
     });
  }

  ClearItem()
  {
    this.editing = false;
    this.editingItemIndex = null;
    this.itemForm.patchValue({
      name:'',
      itemType:'',
      unit:'',
      subType:'',
      amount:''
    })
  }

  addItem()
  {
    const newItem = Object.assign({},this.itemForm.value);
    const itemType = new ItemType(newItem.itemType,newItem.subType);
    const itemToAdd = new Item(newItem.name,itemType,newItem.amount,newItem.unit);
    console.log(itemToAdd);
    this.itemService.addItem(itemToAdd);
  }

saveItem()
  {
    const newItem = Object.assign({},this.itemForm.value);
    const itemType = new ItemType(newItem.itemType,newItem.subType);
    const itemToAdd = new Item(newItem.name,itemType,newItem.amount,newItem.unit);
    console.log(itemToAdd);
    this.itemService.saveItem(itemToAdd,this.editingItemIndex);
  }

}