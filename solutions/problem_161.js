/**
 * Reverse 32-bit integer
 * @param  {number} n
 * @return {number}
 */
function reverseBits(n) {
  const inverted = [];
  for (let i = 0; i < n.length; i++) {
    if (n.charAt(i) === '0') {
      inverted.push('1');
    } else if (n.charAt(i) === '1') {
      inverted.push('0');
    } else {
      inverted.push(n.charAt(i));
    }
  }
  return inverted.join('');
}

console.log(reverseBits('11110000111100001111000011110000'));
