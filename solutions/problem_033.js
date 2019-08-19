import Heap from '../Data-Structures/Heap';

/**
 * Computes a running median of a sequence of numbers
 * @param {number[]} numbers
 * @return {number[]}
 */
function runningMedian(numbers) {
  // maxHeap for the first half of numbers and minHeap for the second half of numbers
  const highers = new Heap();
  const lowers = new Heap((x, y) => x - y);
  const medians = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    addNumber(number, lowers, highers);
    rebalance(lowers, highers);
    medians.push(getMedian(lowers, highers));
  }

  return medians;
}

/**
 * Adds a number to the lowers or right heap
 * @param {number} num
 * @param {Heap} lowers
 * @param {Heap} highers
 */
function addNumber(num, lowers, highers) {
  if (lowers.size() === 0 || num < lowers.peek()) {
    lowers.add(num);
  } else {
    highers.add(num);
  }
}

/**
 * Rebalances both the lowers and highers heap, so their sizes would be at most 1
 * @param {Heap} lowers
 * @param {Heap} highers
 */
function rebalance(lowers, highers) {
  const biggerHeap = lowers.size() > highers.size() ? lowers : highers;
  const smallerHeap = lowers.size() > highers.size() ? highers : lowers;

  if (biggerHeap.size() - smallerHeap.size() >= 2) {
    smallerHeap.add(biggerHeap.poll());
  }
}

/**
 * Gets the median based on the two heaps
 * @param {Heap} lowers
 * @param {Heap} highers
 */
function getMedian(lowers, highers) {
  const biggerHeap = lowers.size() > highers.size() ? lowers : highers;
  const smallerHeap = lowers.size() > highers.size() ? highers : lowers;

  if (biggerHeap.size() === smallerHeap.size()) {
    return (biggerHeap.peek() + smallerHeap.peek()) / 2;
  }
  return biggerHeap.peek();
}
