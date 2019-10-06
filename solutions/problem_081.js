// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Algorithmic Paradigm: Backtracking
// O(3^N * 4^M) Time complexity
// O(3^N * 4^M) Space complexity
// N is the number of digits that maps to 3 letters and M is the number of digits that maps to 4 letters

/**
* Returns all possible letters the number number represents
* @param {Map<number, string[]>} letterMapping
* @param {string} digits
* @return {string[]}
*/
function letterCombinations(letterMapping, digits) {
  if (digits.length === 0) return [];
  const list = [];
  backtrack(letterMapping, digits, list, 0, '');
  return list;
}

/**
* Recursive backtracking function
* @param {Map<number, string[]>} letterMapping
* @param {string} digits
* @param {string[]} list
* @param {number} index
* @param {string} buildString
*/
function backtrack(letterMapping, digits, lists, index, buildString) {
  if (index === digits.length) {
    list.push(buildString);
    return;
  }

  const digit = digits.charAt(index);
  const letters = letterMapping.get(digit);

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    backtrack(letterMapping, digits, list, index + 1, buildString + letter);
  }
}
