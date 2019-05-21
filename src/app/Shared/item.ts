import {ItemType} from './item-type';
import {Unit} from './unit.enum';

export class Item {
  public name : string;
  public type : ItemType;
  public amount : number;
  public unit : Unit;
}