// Assumption that this class is given
// class LinkedList {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

/**
 * Given head of a linked list, swap every two nodes
 * @param  {LinkedList} head
 * @return {LinkedList}
 */
function swapLLNodes(head) {
  let temp = head;
  while (temp !== null && temp.next !== null) {
    // Swap elements
    const k = temp.data;
    temp.data = temp.next.data;
    temp.next.data = k;
    temp = temp.next.next;
  }

  return head;
}
