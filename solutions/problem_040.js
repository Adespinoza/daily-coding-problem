/**
 * Returns the non-duplicated integer in a number array where every other number occurs three times
 * @param {number[]} input
 * @return {number}
 */
function findDuplicate(input) {
  if(input === null) return;
  if(input.length === 1) return input[0];

  var x1 = 0;
  var x2 = 0;
  var mask = 0;

  for(var i = 0; i < input.length; i++){
    x2 ^= x1 & input[i];
    x1 ^= input[i];
    mask = ~(x1 & x2);
    x2 &= mask;
    x1 &= mask;
  }

   return x1;
}

console.log(findDuplicate([6, 1, 3, 3, 3, 6, 6]));    // 1
console.log(findDuplicate([13, 19, 13, 13]));   // 19
