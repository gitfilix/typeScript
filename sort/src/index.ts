import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollections'

const numbersCollection = new NumbersCollection([70, 3, 14, 32, 1, 0, 4, -44, 12])
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data)