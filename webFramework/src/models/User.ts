// type definition
interface UserProps {
  name?: string; 
  age?: number; 
}

// Type Alias: function has no input and no cb return value
type Callbackfn = () => void;

export class User {
  // events annotation: 
  // keys: strings,
  // callbackfn in a Array of Cbfn
  // initialized with empty objece 
  events: { [key: string]: Callbackfn[] } = {};

  constructor (private data: UserProps){}

  //get: either name or age could be passed: 
  get(propName: string): (number | string) {
    return this.data[propName];
  }

  // : void nothing will be returned
  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  //event handler: event and callback-fn
  on(eventName: string, callback: Callbackfn) {
    // if events are empyt {} at init state (undefined) -> handlers are empty array 
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

}