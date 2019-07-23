// This code will not run because `get_pointer` and `dereference_pointer` are given in the problem. This assumes they will work as intended.

class ListNode {
  /**
  * Initialize ListNode
  * @param {*} val
  */
  constructor(val) {
    this.val = val;
    this.both = null;
  }
}


class XORListNode {
  /**
  * Initialize XOR Linked List
  */
  constructor() {
    this.root = null;
    this.tail = null
  }

  /**
  * Adds an element to the end of the linked list
  * @param {*} element
  */
  add(element) {
    const node = new ListNode(element);
    if(this.root == null && this.tails == null) {
      this.root = node;
      this.tail = node;
    } else {
      node.both = get_pointer(this.tail);
      this.tail.both ^= get_pointer(node);
      this.tail = node;
    }
  }
  /**
  * Returns the node at index of this XOR Linked List
  * @param {number} index
  * @return {ListNode}
  */
  get(index) {
    // Base cases
    if(this.root === null) return null;
    if(index === 0) return this.root;

    var curr = get_pointer(this.root);
    var prev = null;
    var i = 0;

    // Continue until at the same index
    // The XOR ListNode defined as:
    // prev ^ next = curr.
    // To traverse:
    // prev ^ curr = next.
    while(curr !== null) {
      if(i === index) break;
      var next = prev ^ curr;
      prev = curr;
      curr = next;
      i++;
    }

    if (i !== index) return null;

    return dereference_pointer(curr);
  }
}
