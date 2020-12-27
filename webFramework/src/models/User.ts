// type definition
interface UserProps {
  name: string; 
  age: number; 
}

export class User {
  constructor (private data: UserProps){}

  //get: either name or age could be passed: 
  get(propName: string): (number | string) {
    return this.data[propName];
  }
  
  // : void nothing will be returned
  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

}