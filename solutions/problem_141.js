class ThreeStack {
  /**
   * Create three stacks usings single list
   * @param {number} [stackCapacity=3]
   */
  constructor(stackCapacity = 3) {
    this.stackCapacity = stackCapacity;
    this.values = [];
    this.sizes = [0, 0, 0];
    this.numberOfStacks = 3;
  }

  /**
   * Pop top element off stack (1-3)
   * @param  {number} numStack
   * @return {number}
   */
  pop(numStack) {
    if (this.isEmpty(numStack)) {
      return null;
    }

    const topIndex = this.indexOfTop(numStack);
    const value = this.values[topIndex];
    this.values[topIndex] = 0; // Clear out element
    this.sizes[numStack]--; // Reduce num elements in the stack
    return value;
  }

  /**
   * Pushes elements into stack
   * @param  {*} item
   * @param  {number} numStack
   */
  push(item, numStack) {
    if (this.isFull(numStack)) {
      return;
    }

    // Add one to the respective stack count
    this.sizes[numStack - 1]++;

    // Add the value to the list
    this.values[this.indexOfTop(numStack)] = item;
  }

  /**
   * Index of the top element
   * @param  {number} numStack
   * @return {number}
   */
  indexOfTop(numStack) {
    const offset = numStack * this.stackCapacity; // Find the starting point in the array
    const size = this.sizes[numStack - 1]; // How many elements are in that stack currently?
    return offset + size - 1;
  }

  /**
   * Returns stack capacity
   * @return {number}
   */
  getStackCapacity() {
    return this.stackCapacity;
  }

  /**
   * Checks if the stack is full
   * @param  {number}  numStack
   * @return {boolean}
   */
  isFull(numStack) {
    return this.sizes[numStack - 1] === this.stackCapacity;
  }

  /**
   * Checks if a stack is empty
   * @param  {number}  numStack
   * @return {boolean}
   */
  isEmpty(numStack) {
    return this.sizes[numStack - 1] === 0;
  }
}
