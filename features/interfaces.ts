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

// to call printVehicle you must pass an object that meets the specification defined in a Interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
  console.log(vehicle.summary());
  
}

printVehicle(oldCivic)