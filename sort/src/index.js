"use strict";
exports.__esModule = true;
var sorter_1 = require("./sorter");
var NumbersCollections_1 = require("./NumbersCollections");
var numbersCollection = new NumbersCollections_1.NumbersCollection([1000, 3, 14, 32, 1, 0, 4, -44, 12]);
var sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
