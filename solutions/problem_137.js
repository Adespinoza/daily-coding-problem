class BitArray {
  /* Bit Array constructor */
  constructor() {
    this.arr = [];
  }

  /**
   * Initialize the arary with size
   * @param  {[type]} size
   */
  init(size) {
    this.arr = new Array(size);
  }

  /**
   * Updates index at i with val where val is either 1 or 0
   * @param {number} i
   * @param {number} val
   */
  set(i, val) {
    this.arr[i] = val;
  }

  /**
   * Gets the value at index i
   * @param  {number} i
   * @return {number}
   */
  get(i) {
    return this.arr[i];
  }
}
