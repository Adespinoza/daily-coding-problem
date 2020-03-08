class PrefixMapSum {
  /**
   * Implementation of a PrefixMapSum
   * @constructor
   */
  constructor() {
    this.map = new Map();
  }

  /**
   * Set a key's value in a map.
   * Overite if the key exists
   * @param {(string | number)} key
   * @param {number} value
   */
  insert(key, value) {
    this.map.set(key, value);
  }

  /**
   * Return sum of all values of keys
   * that begin with a given prefix
   * @param {string} prefix
   * @return {number}
   */
  sum(prefix) {
    let sum = 0;
    this.map.forEach((val, key) => {
      if (key.includes(prefix)) sum += val;
    });
    return sum;
  }
}

const mapsum = new PrefixMapSum();
mapsum.insert('columnar', 3);
mapsum.insert('column', 2);
console.log(mapsum.sum('col')); // 5
mapsum.insert('collar', 3);
console.log(mapsum.sum('col')); // 8
mapsum.insert('cat', 1);
mapsum.insert('camera', 2);
mapsum.insert('cod', 2);
console.log(mapsum.sum('c')); // 13
