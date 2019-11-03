/**
 * Given unsigned 8-bit integer, swap even and odd bits
 * @param  {number} x
 * @return {number}
 */
function swapBinaryDigits(x) {
  // EVEN = 0b10101010 and ODD = 0b01010101
  return (x & 0b10101010) >> 1 | (x & 0b01010101) << 1;
}
