/* eslint "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"]
 */

class ArrayIterator {
  constructor(list) {
    this.array = list.reduce((a, b) => a.concat(b), []);
    this.index = 0;
  }

  /**
   * eturns the next element in the array of arrays.
   * If there are no more elements, raise an exception.
   * @return {number}
   */
  next() {
    return this.array[this.index++];
  }

  /**
   * Returns whether or not the iterator still has elements left.
   * @return {boolean}
   */
  hasNext() {
    return this.index < this.array.length;
  }
}

const arr = new ArrayIterator([[1, 2], [3], [], [4, 5, 6]]);
console.log(arr.next()); // 1
console.log(arr.next()); // 2
console.log(arr.next()); // 3
console.log(arr.next()); // 4
console.log(arr.next()); // 5
console.log(arr.next()); // 6
console.log(arr.next()); // undefined
console.log(arr.next()); // undefined
console.log(arr.next()); // undefined
console.log(arr.next()); // undefined
console.log(arr.next()); // undefined
