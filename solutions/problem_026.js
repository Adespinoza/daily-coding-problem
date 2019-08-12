class Node {
  /**
  * Initializes the start of a link list
  * @param {*} val The value stored in linked list
  */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Removes the kth last element from this list
 * @param {Node} head
 * @param {number} k
 * @return {Node}
 */
function removeKth = (head, k) => {
  let prevNode = head;
  let iterator = head;
  let count = 0;

  // Iterate until kth element
  while (iterator) {
    iterator = iterator.next;
    if (k-- < 0) {
      prevNode = prevNode.next;
    }
  }

  if (k === 0) return prevNode.next;
  prevNode.next = prevNode.next.next;
  return head;
}
