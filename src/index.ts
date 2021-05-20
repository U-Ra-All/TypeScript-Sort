class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i -1; j++) {

        // If collection is an array of numbers
        if (this.collection instanceof Array) {
          // colection has type of number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // If collection is a string
        if (typeof this.collection === 'string') {
          
        }
      
      }
    }
  }
}

const sorter = new Sorter([4, -3, 11, 2]);
sorter.sort();
console.log(sorter.collection);