import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';
import {Unit} from '../models/unit.enum';
import { Subject  } from 'rxjs';
import{ItemService} from '../shared/item.service';
import {MatPaginator, MatSort,MatTableModule, MatTableDataSource} from '@angular/material'; 

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
public items : Item[];
public units : string[];
 dataSource: MatTableDataSource<Item>;
displayedColumns  = ['name', 'type', 'unit','operations'];
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.units  = Object.keys(Unit);
     this.items = this.itemService.getItems();
     this.units = this.units.slice(this.units.length / 2);
     this.dataSource  =  new  MatTableDataSource<Item>(this.items);

     console.log(this.units);
     this.itemService.subject.subscribe({
       next:function(value)
       {
          console.log("--------------value");
       }
     });
     
  }

}