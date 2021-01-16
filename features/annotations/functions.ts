// annotations in functions

const add = (a :number, b: number): number => {
  return a + b
}

const subtract = (a :number, b :number) :number => {
  return a - b
}

// old syntax: named function
function divide(a: number, b: number): number {
  return a / b 
}

// anonymous function 
const multiply = function(a: number, b: number): number {
  return a * b
}

// will never return anything therefore: void
const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): void => {
  if(!message) {
    throw new Error(message)
  }
}

const todaysWeather = {
  date: new Date(),
  weather: 'raining'
}

const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
  
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)