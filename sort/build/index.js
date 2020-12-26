"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// 
// const numbersCollection = new NumbersCollection([-70, 3, 14, 32, 25, 2, 0, 4, -42, 12])
// const sorter = new Sorter(numbersCollection)
// sorter.sort();
// console.log(numbersCollection.data)
// 
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xzuanzbs');
var sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
