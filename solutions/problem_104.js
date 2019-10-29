// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Determine if doubly LL is a palindrom
 * @param  {Node}  head
 * @return {Boolean}
 */
function isLLPalindrome(head) {
  let result = [];

  // Push node into array
  while (head) {
    result.push(head.val);
    head = head.next;
  }

  // Check palindrome state
  let marker = true;
  for (let i = 0; i < result.length; i++) {
    marker = marker && result[i] === result[(result.length - i) - 1];
  }

  return marker;
}
