var check_sum = (arr, k) => {
  var potential_solutions = new Set();
  for (curr_num in arr) {
    if (potential_solutions.has(arr[curr_num])) {
      return true;
    }
      potential_solutions.add(k - arr[curr_num]);
  }
  return false;
}

console.log(check_sum([], 17));               // False
console.log(check_sum([10, 15, 3, 7], 17));   // True
console.log(check_sum([10, 15, 3, 4], 17));   // False
console.log(check_sum([100, 25, 3, 4], 125));  // True
console.log(check_sum([1, 2, 3, 4], -1));      // False
