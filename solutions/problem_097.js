class TimeMap {
  constructor() {
    this.map = new Map();
  }

  /**
   * Set the key to value for t = time
   * @param {any} key
   * @param {any} value
   * @param {number} time
   */
  set(key, value, time) {
    if (!this.map.has(key)) {
      const arr = [{ value, time }];
      this.map.set(key, arr);
    } else {
      const arr = this.map.get(key);

      // check all elements in arr.
      // If one contains the same value. Rewrite the time
      // else push new element of value, time

      let found = false;
      const updatedArr = arr.map(element => {
        const { value: eValue } = element;
        if (eValue !== value) return element;
        found = true;
        return {
          value,
          time
        };
      });

      if (!found) {
        updatedArr.push({ value, time });
      }

      this.map.set(key, updatedArr);
    }
  }

  /**
   * Gets the key at time t
   * @param {any} key
   * @param {number} time
   * @return {any}
   */
  get(key, time) {
    // get biggest time smaller or equal to time
    if (!this.map.has(key)) return null;

    const arr = this.map.get(key);

    let value = null;
    let biggestTimeSmallerThanTime = null;

    for (let i = 0; i < arr.length; i++) {
      const { value: eValue, time: eTime } = arr[i];
      if (eTime > time) continue;

      if (value === null && biggestTimeSmallerThanTime === null) {
        value = eValue;
        biggestTimeSmallerThanTime = eTime;
      }

      if (eTime >= biggestTimeSmallerThanTime) {
        value = eValue;
        biggestTimeSmallerThanTime = eTime;
      }
    }

    return value;
  }
}
