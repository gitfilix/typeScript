// sort project

class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
    // lenght of the array
    const { length } = this.collection; 
    
    // implementation of bubble-sort (double-loop iterate ) here:
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length -i - 1; j ++) {
        // if leftHand-side of two elements is bigger -> swap it to the right
        if (this.collection[j] > this.collection[ j +1 ]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[ j +1 ];
          this.collection[ j +1 ] = leftHand;
        }
      }
    }
        
  }
}

const myListToSort = new Sorter([10, 3, -5, 0, 7, 33, -7]);
myListToSort.sort()

console.log(myListToSort.collection);
