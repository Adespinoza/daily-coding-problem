// https://leetcode.com/problems/rotate-string/
//
// O(M + N) Time complexity for indexOf function
// O(N) Space complexity due to string concatenation
// M is the length of A and N is the length of B

/**
 * Determines if s1 can be shifted to get s2
 * @param  {string} s1
 * @param  {string} s2
 * @return {boolean}
 */
function stringShift(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).indexOf(s2) !== -1;
}
