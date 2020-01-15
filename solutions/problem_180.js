import Stack from './data-structures/Stack';
import Queue from './data-structures/Queue';

/**
 * Interleave first half of stack with second half reversed
 * @param  {number[]} items
 * @return {number[]}
 */
function interleaveItems(items) {
  // base case
  if (items.length === 0) return items;

  // find midpoint of items
  const midpoint = Math.floor(items.length / 2);
  const stack = new Stack(items);
  const queue = new Queue();

  // Enqueue popped elements from stack until midpoint
  while (stack.items.length !== midpoint) {
    queue.enqueue(stack.pop());
  }

  // interleave elements until midpoint  1
  let i = midpoint;
  while (!queue.isEmpty()) {
    if (i > 1) {
      const temp = stack.pop();
      stack.push(queue.dequeue());
      stack.push(temp);
    } else {
      stack.push(queue.dequeue());
    }
    i -= 1;
  }

  return stack.items;
}

console.log(interleaveItems([1, 2, 3, 4, 5])); // [ 1, 5, 2, 4, 3 ]
console.log(interleaveItems([1, 2, 3, 4])); // [ 1, 4, 2, 3 ]
