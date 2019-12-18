/* eslint max-classes-per-file: ["error", 2] */

import Heap from '../data-structures/Heap';

class HeapStack {
  /**
   * HeapStack constructor
   */
  constructor() {
    this.heap = new Heap();
    this.stack = [];
    this.counter = 0;
  }

  /**
   * Adds an element to the stack
   * @param  {HeapElement} item
   */
  push(item) {
    this.heap.add(this.stack, (this.counter, item));
    this.counter += 1;
  }

  /**
   * Removes and returns the most recently added element
   * @return {number}
   */
  pop() {
    if (this.stack.length === 0) return null;

    const [temp, item] = this.heap.pop();
    return item;
  }
}
