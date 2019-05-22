import {ItemType} from './item-type';
import {Unit} from './unit.enum';

export class Item {
  private name : string;
  private type : ItemType;
  private amount : number;
  private unit : Unit;

  constructor(name:string,typename:ItemType,amount:number,unit:Unit)
  {
      this.name = name;
      this.type = typename;
      this.amount = amount;
      this.unit = unit;
  }
}