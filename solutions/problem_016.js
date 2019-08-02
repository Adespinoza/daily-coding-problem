class OrderLog {
  /*
  * Creates an OrderLog
  */
  constructor(size) {
    this.size = size;
    this.log = [];
    this.currIndex = 0;
  }

  /*
  * Records a log to the orders
  * @param {number} orderId
  */
  record(orderId) {
    this.log[this.currIndex] = orderId;
    this.currIndex = (this.currIndex + 1) % this.size;
  }

  /*
  * Retrieves the ith element in the log of orders
  * @param {number} i
  * @return {number}
  */
  getLast(i) {
    return this.log[(this.currIndex - i + this.size) % this.size];
  }
}

export default OrderLog;
