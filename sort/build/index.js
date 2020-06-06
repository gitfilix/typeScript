"use strict";
// sort project
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        // lenght of the array
        var length = this.collection.length;
        // implementation of bubble-sort (double-loop iterate ) here:
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if leftHand-side of two elements is bigger -> swap it to the right
                // only works for the case if collection is array of numbers.
                // 
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // works only if collection is a string
            }
        }
    };
    return Sorter;
}());
var myListToSort = new Sorter([10, 3, -5, 0, 7, 33, -7]);
myListToSort.sort();
console.log(myListToSort.collection);
