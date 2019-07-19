var array_mult = (arr) => {
  // Possible edge case
  if (arr.length <= 1) { return arr; }

  // Multiply digits right of each index
  var right_total = 1;
  var right_prod_array = [];
  for (num in arr) {
    right_total *= arr[num];
    right_prod_array.push(right_total);
  }

  // Multiply digits left of each index
  var left_total = 1;
  var left_prod_array = [];
  for (num in arr.reverse()) {
    left_total *= arr[num];
    left_prod_array.push(left_total);
  }
  left_prod_array.reverse();

  // Calculation for returned array
  var returned_array = [];
  for (let i = 0; i < arr.length; i++) {
    let num = 0;
    if (i == 0) {
      num = left_prod_array[i + 1];
    } else if (i == arr.length - 1) {
      num = right_prod_array[i - 1];
    } else {
      num = right_prod_array[i - 1] * left_prod_array[i + 1];
    }
    returned_array.push(num);
  }
  return returned_array;
}

console.log(array_mult([]));              // []
console.log(array_mult([1]));             // [1]
console.log(array_mult([3, 2, 1]));       // [2, 3, 6]
console.log(array_mult([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(array_mult([5, 4, 3, 2, 1])); // [24, 30, 40, 60, 120]
console.log(array_mult([1, 2]));          // [2, 1]
