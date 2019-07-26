/**
* @param {*} input
* @return largest sum between non-adjacent numbers
*/
const nonAdjacentSum = (input) => {
  var previous = 0;
  var largest = 0;
  var temp = 0;

  input.map( curr => {
    temp = largest > previous ? largest : previous;
    previous = largest + curr;
    largest = temp;
  })

  return largest > previous ? largest : previous;
}

console.log(nonAdjacentSum([2, 4, 6, 8]))   // 12
console.log(nonAdjacentSum([5, 1, 1, 5]))   // 10
console.log(nonAdjacentSum([0, 1, 1, 5]))   // 6
console.log(nonAdjacentSum([-2, 4, 6, -8])) // 6
