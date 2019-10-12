// O(N) Time complexity
// O(1) Space complexity
// N is the length of the string

/**
* Compute the minimum number of parentheses to be removed
* @param {string} s
* @return {number}
*/
function minParenCount(s) {
  let openParen = 0;
  let removeParen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '(') openParen++;
    else if (char === ')') {
      if (openParen === 0) removeParen++;
      else openParen--;
    }
  }

  return removeParen + openParen;
}
