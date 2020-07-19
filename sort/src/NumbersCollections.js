"use strict";
exports.__esModule = true;
exports.NumbersCollection = void 0;
// bubble sorting algoritm
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // lenght for numbers of iterations
        // keyword 'get' we do not have to call that
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    // compare left and right value of two numbers
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    // spap logic
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
