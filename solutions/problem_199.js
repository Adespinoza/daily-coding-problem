/**
 * Min number of insertions to balance
 * @param  {string}  str
 * @return {string }
 */
function minParenthesis(str) {
  const orig = str;

  // Repeatedly remove all instances of "()" until there are none left
  while (str.includes('()')) str = str.replace(/\(\)/g, '');

  // Count the number of ")" and "(" left in the string
  const amtOpeningParensNeeded = (str.match(/\)/g) || []).length;
  const amtClosingParensNeeded = (str.match(/\(/g) || []).length;

  // Add that many "(" and ")" to the string, respectively
  return (
    '('.repeat(amtOpeningParensNeeded) +
    orig +
    ')'.repeat(amtClosingParensNeeded)
  );
}

console.log(minParenthesis('(()')); // (())
console.log(minParenthesis('))()(')); // (())()()
