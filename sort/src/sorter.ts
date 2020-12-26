// helper class 
// import { NumbersCollection} from './NumbersCollections'

interface Sortable {
  length: Number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}


export class Sorter {
    // TS collection accept
    constructor(public collection: Sortable) {}
    sort(): void {
    // lenght of the array
      const { length } = this.collection;

    // implementation of bubble-sort (double-loop iterate ) here:
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare( j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}
