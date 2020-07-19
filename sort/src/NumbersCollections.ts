// bubble sorting algoritm
export class NumbersCollection {
  constructor(public data: number[]) {}

    // lenght for numbers of iterations
    // keyword 'get' we do not have to call that
    get length(): number {
      return this.data.length;
    }

    // compare left and right value of two numbers
    compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex] > this.data[rightIndex];
    }

    // spap logic
    swap(leftIndex: number, rightIndex: number): void {
      const leftHand = this.data[leftIndex];
      this.data[leftIndex] = this.data[rightIndex];
      this.data[rightIndex] = leftHand;
    }
}