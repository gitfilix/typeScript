// ts guesses right because the values are in at the initailisation
const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

// 2 dimensional arrays
const carsByMaker: string[][] = [
  ['f150'],
  ['corolla'],
  ['camoror']
]

// help with inference when extracing values
const cars = carMakers[0]
// TS asumes myOwnCar must be a string because of the type of carMakers
const myOwnCar = carMakers.pop()

// prevent incompatible values
carMakers.push(100)


// Help with 'map'
carMakers.map( (car: string): string => {
  return car.toLocaleUpperCase()
})

// flexible Types
const importantDates: (Date | string)[] = []
importantDates.push('2030-10-4') // valid 
importantDates.push(new Date('2043-3-10')) // valid
importantDates.push(200) // InValid !


