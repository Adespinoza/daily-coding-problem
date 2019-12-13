// Referenced: https://www.geeksforgeeks.org/generate-n-bit-gray-codes/

/**
 * Generates a gray code
 * @param  {number} n - number of bits
 * @return {number[]}
 */
function generateGrayCode(n) {
  if (n <= 0) return null;

  const arr = [];

  // start with one-bit pattern
  arr.push('0');
  arr.push('1');

  let i;
  let j;
  // every iteration of this loop generates 2*i codes from previously
  for (i = 2; i < 1 << n; i <<= 1) {
    // enter the prviously generated codes again in arr[] in reverse.
    for (j = i - 1; j >= 0; j--) arr.push(arr[j]);

    // append 0 to the first half
    for (j = 0; j < i; j++) arr[j] = `0${arr[j]}`;

    // append 1 to the second half
    for (j = i; j < 2 * i; j++) arr[j] = `1${arr[j]}`;
  }

  return arr;
}

console.log(generateGrayCode(2)); // [ '00', '01', '11', '10' ]
console.log(generateGrayCode(3)); // [ '000', '001', '011', '010', '110', '111', '101', '100' ]
