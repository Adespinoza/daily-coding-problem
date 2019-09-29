/**
*	Reverse LinkedList in-place.
*	@param {Node} head
*	@return {Node}
*/
function reverseLinkedList(head) {
	let newHead = null;

	// Iterate until end of list
  while (head !== null) {
    const { next } = head;
    head.next = newHead;
    newHead = head;
    head = next;
  }

  return newHead;
}
