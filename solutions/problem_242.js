class TwitterSubscribers {
  /**
   * Constructor for Twitter Subscrriber datastructure
   * @constructor
   */
  constructor() {
    this.subscribers = new Array(24).fill(0);
  }

  /**
   * Update subscriber value at a certain hour
   * @param {number} hour
   * @param {number} value
   */
  update(hour, value) {
    if (hour > 0 && hour <= 24) this.subscribers[hour] += value;
  }

  /**
   * Retrieve number of subscribers between a start and end (inclusive)
   * @param {number} start
   * @param {number} end
   * @return {number}
   */
  query(start, end) {
    return start < end && (start > 0 && start <= 24) && (end > 0 && end <= 24)
      ? this.subscribers.slice(start, end).reduce((a, b) => {
          return a + b;
        })
      : null;
  }
}

const ts = new TwitterSubscribers();
ts.update(2, 50);
ts.update(4, 100);
ts.update(9, 10);
ts.update(100, 10);
console.log(ts.query(1, 8)); // 150
console.log(ts.query(1, 11)); // 160
console.log(ts.query(9, 10)); // 10
console.log(ts.query(9, 9)); // null
console.log(ts.query(0, 100)); // null
