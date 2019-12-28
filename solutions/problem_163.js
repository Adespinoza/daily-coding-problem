/**
 * Calculate expression given list of numbers & operands
 * @param  {string[]} arr
 * @return {number}
 */
function calculateRPN(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(stack);
    if (typeof arr[i] === 'number') {
      stack.push(arr[i]);
    } else {
      const a = stack.pop();
      const b = stack.pop();
      if (arr[i] === '+') stack.push(parseInt(a, 10) + parseInt(b, 10));
      else if (arr[i] === '-') stack.push(parseInt(b, 10) - parseInt(a, 10));
      else if (arr[i] === '*') stack.push(parseInt(a, 10) * parseInt(b, 10));
      else if (arr[i] === '/') stack.push(parseInt(b, 10) / parseInt(a, 10));
      else if (arr[i] === '^') stack.push(parseInt(b, 10) ** parseInt(a, 10));
    }
  }

  return stack.pop();
}

console.log(calculateRPN([5, 3, '+'])); // 8
console.log(
  calculateRPN([15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'])
); // 5
console.log(calculateRPN([2, 3, '^'])); // 8
