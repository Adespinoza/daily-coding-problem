/**
 * Determine whether parenthesis can be balanced
 * @param  {string}  str
 * @return {boolean}
 */
function isBalancedParen(str) {
  // Base case
  if (str.length <= 1) return false;

  const arr = [...str];
  let hi = 0;
  let lo = 0;

  // count total number of open and closed brackets
  for (let i = 0; i < arr.length; i++) {
    lo += arr[i] === '(' ? 1 : -1;
    hi += arr[i] !== ')' ? 1 : -1;
    if (hi < 0) break;
    lo = Math.max(lo, 0);
  }

  return lo === 0;
}

console.log(isBalancedParen('(*)')); // true
console.log(isBalancedParen(')*(')); // false
console.log(isBalancedParen('(*****)')); // true
console.log(isBalancedParen(' ')); // false
console.log(isBalancedParen('((')); // false
