/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Sort LinkedList in ascending order
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param  {ListNode} head
 * @return {ListNode}
 */
function sortLinkedList(head) {
  // initial base case
  if (head.next === null || head === null) return head;

  // retrieve middle node
  const mid = getMidNode(head);
  const right = mid.next;
  mid.next = null;

  // sort split sides and merge contents
  return merge(sortLinkedList(head), sortLinkedList(right));
}

/**
 * Merge two linked lists
 * @param  {ListNode} left
 * @param  {ListNode} right
 * @return {ListNode}
 */
function merge(left, right) {
  if (!left || !right) return left || right;

  if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  }
  right.next = merge(left, right.next);
  return left;
}

/**
 * Retrieve node previous to middle of a LinkedList
 * @param  {ListNode} head
 * @return {ListNode}
 */
function getMidNode(head) {
  let prev = head;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return prev;
}
