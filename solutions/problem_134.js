class SparseArray {
  /* constructor */
  constructor() {
    this.sparseArray = [];
  }

  /**
   * initialize with original large array and size
   * @param  {number[]} arr
   * @param  {number} size
   */
  init(arr, size) {
    const newArr = new Array(size);
    arr.forEach(i => {
      newArr[i] = i;
    });
    this.sparseArray = newArr;
  }

  /**
   * Updates index at i with val
   * @param {number} i
   * @param {number} val
   */
  set(i, val) {
    this.sparseArray[i] = val;
  }

  /**
   * Gets the value at index i
   * @param  {number} i
   * @return {number}
   */
  get(i) {
    return this.sparseArray[i];
  }
}

// const sparse = new SparseArray();
// sparse.init([1, 2, 3, 4, 5], 100);
// sparse.set(68, 10);
// console.log(sparse.get(68)); // 10
