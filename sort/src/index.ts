import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollections'
import { CharactersCollection } from './CharactersCollection'

// 
// const numbersCollection = new NumbersCollection([-70, 3, 14, 32, 25, 2, 0, 4, -42, 12])
// const sorter = new Sorter(numbersCollection)
// sorter.sort();
// console.log(numbersCollection.data)
// 

const charactersCollection = new CharactersCollection('Xzuanzbs')
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)