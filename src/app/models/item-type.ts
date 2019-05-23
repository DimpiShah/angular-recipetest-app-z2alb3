import {SubType} from './sub-type.enum';

export class ItemType {
  public name : string;
  public subType : SubType;

  constructor(name:string,subType:SubType)
  {
    this.name = name;
    this.subType = subType;
  }
}
  