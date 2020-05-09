// tupples

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// tuple definition: order of types matters here
const pepsi: [string, boolean, number] = ['brown', true, 40]

// or define a Type ALIAS Drink
type Drink = [string, boolean, number]

const cocacola: Drink = ['black', true, 34]


