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


// when to use annotations ?

// 1. functions theat return 'any' type
// ts would assume json has type 'any'
const json = '{"x": 10, "y": 20}';
// here we specify whats in
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates);

// 2. when we declare a variable on one line and initialize it later
let words = ['red', 'blue', 'green', 'purple']
// foundWord is declared but not initialized here
let foundWord: boolean

for ( let i = 0; i < words.length; i++ ) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3. varialbles whose type cannot be inferred correctly
let numbers = [-10, -5, 12, 44]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++ ) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}






