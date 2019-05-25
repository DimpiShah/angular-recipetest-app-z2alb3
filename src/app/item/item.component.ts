import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup,FormControl, Validators ,FormsModule} from '@angular/forms';
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
itemForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    unit: new FormControl('')
  });

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.units  = Object.keys(Unit);
     this.items = this.itemService.getItems();
     this.units = this.units.slice(this.units.length / 2);
     console.log(this.units);
     this.itemService.subject.subscribe({
       next:function(value)
       {
          console.log("--------------value");
       }
     });
     
  }

}