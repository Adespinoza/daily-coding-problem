/**
 * Find where to stand in order to be the last survivor
 * Time Complexity: O(log N)
 * @param {number} n number of prisoners in a circle
 * @param {number} k number of every successive kth person
 */
function solveJosephusProblem(n, k) {
  return n > 1 ? ((solveJosephusProblem(n - 1, k) + k - 1) % n) + 1 : 1;
}

console.log(solveJosephusProblem(5, 2)); // 3
console.log(solveJosephusProblem(4, 2)); // 1
console.log(solveJosephusProblem(13, 2)); // 11
console.log(solveJosephusProblem(16, 2)); // 1
console.log(solveJosephusProblem(10, 3)); // 4
