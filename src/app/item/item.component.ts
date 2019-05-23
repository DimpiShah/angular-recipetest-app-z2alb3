import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';
import { Subject  } from 'rxjs';
import{ItemService} from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
public items : Item[];
  constructor(private itemService:ItemService) { }

  ngOnInit() {
     this.items = this.itemService.getItems();
     this.itemService.subject.subscribe({
       next:function(value)
       {
          console.log("--------------value");
       }
     });
     
  }

}