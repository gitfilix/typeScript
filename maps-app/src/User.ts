import faker from 'faker';
import { Mappable } from './customMap'

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';
  
  constructor() {
    this.name = faker.name.firstName()
    this.location ={
      lat: parseFloat(faker.address.latitude()), // we want number but faker delivers a string
      lng: parseFloat(faker.address.longitude())
    } 
  }
  
  markerContent():string {
    return `User Name: ${this.name}`;
  }
  
}