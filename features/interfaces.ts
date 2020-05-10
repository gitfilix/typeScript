//
interface Reportable {
  summary(): string; // summary is a function that returns a string
}

// type interface Vehicle - very generic
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // summary is a function that returns a string
}


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const drink = {
  color: 'pinkgreen',
  carbonated: true,
  sugar: 34,
  summary(): string {
    return `My drink has this fance ${this.color} color`
  }
}


// to call printSummary you must pass an object that meets the specification defined in a Interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
  
}

printSummary(oldCivic)
printSummary(drink)
