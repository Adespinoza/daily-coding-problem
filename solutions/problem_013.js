/**
* @param {number} k the longest substring with distinct characters
* @param {string} str finds unique substring of this string
* @return longest unique substring
*/
const longestSubstring = (k, str) => {
  // Base cases
  if(k < 0 || k == null) return "";
  if(k > str.length) return str;
  if(k == 1) return str[0];

  var longestStr = "";
  var allSubstr = [];
  // Not the best runtime
  for (let i = 0; i < str.length; i++) {
    let currentSubstr = "";
    let counter = 0;
    for(let j = i; j < str.length; j++) {
      if(!currentSubstr.includes(str.charAt(j))) {
        counter++;
        if(counter > k) {
          break;
        }
      }
      currentSubstr += str.charAt(j);
    }
    longestStr = currentSubstr.length > longestStr.length ? currentSubstr : longestStr;
    allSubstr.push(currentSubstr);
  }

  return longestStr;
}

console.log(longestSubstring(0, "abcba"));	// ""
console.log(longestSubstring(1, "a"));	// "a"
console.log(longestSubstring(2, "abcba"));	// "bcb"
console.log(longestSubstring(4, "abcba"));	// "abcba"
console.log(longestSubstring(2, "abccbba"));	//"bccbb"
console.log(longestSubstring(2, "abcbbbabbcbbadd"));	//"bbbabb"
