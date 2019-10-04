// https://leetcode.com/problems/merge-k-sorted-lists/

/**
* Returns a merged linked list of an array of linked list
* @param {LinkedListNode<LinkedListNode>} lists
* @return {LinkedListNode}
*/
function mergeKLists(lists) {
  function mergeLists(l1, l2) {
    const dummy = new LinkedListNode();
    let prev = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }

      prev = prev.next;
    }

    prev.next = l1 || l2;
    return dummy.next;
  }

  return lists.reduce(mergeLists, null);
}
