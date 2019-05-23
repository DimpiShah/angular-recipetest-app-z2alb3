import {ItemType} from './item-type';
import {Unit} from './unit.enum';

export class Item {
  public name : string;
  public type : ItemType;
  public amount : number;
  public unit : Unit;

  constructor(name:string,typename:ItemType,amount:number,unit:Unit)
  {
      this.name = name;
      this.type = typename;
      this.amount = amount;
      this.unit = unit;
  }
}