/**
 * Finds the nth number in Fibbonacci sequence
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  return Math.round(goldenRatio ** n / Math.sqrt(5));
}
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(25)); // 75025
console.log(fib(50)); // 12586269025
