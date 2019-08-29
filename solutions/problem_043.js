class MaxStack {
  constructor() {
    this.stack = [];
    this.maxNum = [];
  }

  /**
  * Pushes value into the current stack
  * @param {number} val
  */
  push(val) {
    if(this.maxNum.length === 0
      || val >= this.maxNum[this.maxNum.length - 1]) {
      this.maxNum.push(val);
    }
    this.stack.push(val);
  }

  /**
  * Pops an element, and returns the topmost element of the stack
  * @return {number}
  */
  pop() {
    if (this.stack.length === 0) return null;
    const val = this.stack.pop();
    // Check to remove from max stack
    if (val === this.maxNum[this.maxNum.length - 1]) this.maxNum.pop();
    return val;
  }

  /**
  * Returns the maximum value in the stack currently
  * @return {number}
  */
  max() {
    if(this.maxNum.length === 0) return null;
    return this.maxNum[this.maxNum.length - 1];
  }
}

export default MaxStack;
