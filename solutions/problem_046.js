/**
*	Returns the longest palindromic contiguous substring
*	@param {string} phrase
*	@return {string}
*/
function findLongestPalindrome(phrase) {
	if (phrase.length === 0) return '';

	const dp = [...Array(phrase.length)].map(() => Array(phrase.length).fill(false));
	let palindromeStart = 0;
	let palindromeLength = 1;

	// Single characters are considered palindromes
	for (let i = 0; i < phrase.length; i++) {
		dp[i][i] = true;
	}

	// Two character palindromes
	for (let i = 0; i < phrase.length - 1; i++) {
		if (phrase.charAt(i) === phrase.charAt(i + 1)) {
			dp[i][i + 1] = true;
			palindromeStart = i;
			palLength = 2;
		}
	}

	for (let subLen = 3; subLen <= phrase.length; subLen++) {
    // Check all substring of length subLen
    for (let start = 0; start < phrase.length - subLen + 1; start++) {
      const end = start + subLen - 1;

      if (phrase.charAt(start) === phrase.charAt(end) && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        palindromeStart = start;
        palindromeLength = subLen;
      }
    }
  }

  return phrase.substring(palindromeStart, palindromeStart + palindromeLength);
}

console.log(findLongestPalindrome("bananas"));	// 'anana'
console.log(findLongestPalindrome("aabcdcb"));	// 'bcdcb'


