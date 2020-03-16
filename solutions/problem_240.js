/**
 * Minimum number of spots to organize 2 * N couples
 * @param  {number} n
 * @return {number}
 */
function minSwaps(n) {
  return n - 1;
}

console.log(minSwaps(2));

// Note: Order of numbers is arbitrary, I am treating couples as being the
// same number next to eachother (i.e - 1 & 1 are a couple, 2 & 2 are a couple, etc.)
// ----------------------------------------
// Example n = 1 (one couple):
// const arr = [1, 1];

// i = 0 - no swaps
// [1, 1]

// Number of Swaps: 0

// ----------------------------------------
// Example n = 2 (two couples):
// const arr = [1, 2, 1, 2];

// i = 1  - swap(arr[1], arr[2]);
// [1, 1, 2, 2];

// Number of Swaps: 1

// ----------------------------------------
// Example n = 3 (three couples):
// const arr = [3, 2, 1, 2, 3, 1];

// i = 1  - swap(arr[1], arr[4]);
// [3, 3, 1, 2, 2, 1];

// i = 2 - swap(arr[2], arr[4]);
// [3, 3, 2, 2, 1, 1];

// Number of Swaps: 2

// Example n = 3 (three couples):
// const arr = [3, 3, 1, 2, 1, 2];

// i = 1  - swap(arr[3], arr[4]);
// [3, 3, 1, 1, 2, 2]

// Number of Swaps: 1

// ----------------------------------------
// Depending on implentation of swaps:
// Best Case: Ω(nlogn)
// Worst Case: O(n - 1)
