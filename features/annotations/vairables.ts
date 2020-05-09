// w
// type annotation
let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date;

// complex annotations (Object Literal Annotations)
// -------------------------------------------------

// Array with strings 
let colors: string[] = ['red', 'green', 'car']
let nyNumbers: number[] = [1, 44, 234]
let truths: boolean[] = [true, true, false]


// Classes: variable car is refering to an Instance of class Car 
class Car {
   
}
let car: Car = new Car()

// Object literal: properties assignent
let point: {x: number; y: number} = {
  x: 12,
  y: 32
}


// Function 
const logNumber: (i: number) => void = (i: number ) => {
  console.log('i:', i)
}





