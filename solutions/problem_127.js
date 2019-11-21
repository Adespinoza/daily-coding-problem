// LinkedList class example
function LLNode(val = null) {
  this.val = val;
  this.next = null;
}

/**
 * Adds two linked lists together in reverse order
 * @param {LLNode} l1
 * @param {LLNode} l2
 */
function addLinkedLists(l1, l2) {
  let resultList = new LLNode();
  let prev = new LLNode();
  let temp = new LLNode();
  let carry = 0;
  let sum = 0;

  while (l1 != null || l2 != null) {
    sum = carry + (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0);

    // update carry for next calulation
    carry = sum >= 10 ? 1 : 0;

    // update sum if it is greater than 10
    sum %= 10;

    temp = new LLNode(sum);

    // if this is the first node then set it as head of
    // the resultant list
    if (resultList == null) {
      resultList = temp;
    } // If this is not the first node then connect it to the rest.
    else {
      prev.next = temp;
    }

    // Set prev for next insertion
    prev = temp;

    // Move l1 and l2 pointers to next nodes
    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next;
    }

    if (carry > 0) {
      temp.next = new LLNode(carry);
    }
  }

  // return head of the resultant list
  return resultList;
}
