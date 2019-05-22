import {SubType} from './sub-type.enum';

export class ItemType {
  private name : string;
  private subType : SubType;

  constructor(name:string,subType:SubType)
  {
    this.name = name;
    this.subType = subType;
  }
}
  