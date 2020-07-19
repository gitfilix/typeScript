"use strict";
exports.__esModule = true;
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    // TS collection accept
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        // lenght of the array
        var length = this.collection.length;
        // implementation of bubble-sort (double-loop iterate ) here:
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
