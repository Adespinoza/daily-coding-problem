/**
* Checks whether string of round, curly, and square brackets are balanced
*   @param {string} input
*   @return {boolean}
*/
const isBalanced = (input) => {
  const stack = [];

  for(let i = 0; i < input.length; i++) {
    const bracket = input.charAt(i);

    if (bracket === '(' || bracket === '[' || bracket === '{') {
      stack.push(bracket);
    }
    else {
      const closedBracket = stack.pop();
      if (closedBracket === undefined) return false;
      if (!isMatch(openingBracket, closedBracket)) return false;
    }

    return stack.length === 0;
  }
}

const isMatch = (opening, closing) => {
    return (
    (opening === '(' && closing === ')') ||
    (opening === '[' && closing === ']') ||
    (opening === '{' && closing === '}')
  );
}

console.log(isBalanced("([])[]({})"));  // true
console.log(isBalanced("([)]"));  // false
console.log(isBalanced("((()"));  // false
