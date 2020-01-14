// import Stack from '../data-structures/Stack';
// import Queue from '../data-structures/Queue';
//
// /**
//  * Interleave first half of stack with second half reversed
//  * @param  {number[]} items
//  * @return {number[]}
//  */
// function interleaveItems(items) {
//   // base case
//   if (items.length === 0) return items;
//
//   // find midpoint of items
//   const midpoint = Math.floor(items.length / 2);
//   const stack = new Stack(items);
//   const queue = new Queue();
//
//   // Enqueue popped elements from stack until midpoint
//   while (stack.length !== midpoint) {
//     queue.enqueue(stack.pop());
//   }
//
//   return midpoint;
// }
//
// console.log(interleaveItems([1, 2, 3, 4, 5]));
// console.log(interleaveItems([1, 2, 3, 4]));
