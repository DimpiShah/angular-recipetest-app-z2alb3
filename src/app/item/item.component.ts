import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';

import{ItemService} from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
items:Item[];
  constructor(private itemService:ItemService) { }

  ngOnInit() {
     this.itemService.getItems();
     this.itemService.itemsChanged.subscribe(
       (item:Item[]) =>
       {
          console.log(item);
       }
     );
     
  }

}