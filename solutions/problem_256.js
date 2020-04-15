/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Rearrange linkedlist in alternating order
 * @param {ListNode} head
 */
function reorderList(head) {
  if (!head || !head.next) return head;
  let prev = head;
  let tail = head.next;

  while (tail) {
    tail.prev = prev;
    prev = tail;
    tail = tail.next;
  }

  let cur = head;

  while (cur !== prev && cur.prev !== prev) {
    const { next } = cur;
    cur.next = prev;
    prev.next = next;
    prev = prev.prev;
    cur = next;
  }

  cur.next = null;
  return head;
}

/**
 * Print LinkedList in arrow form
 * @param {ListNode} head
 */
const printList = head => {
  let current = head;
  const arr = [];

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  console.log(arr.join(' -> '));
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

printList(a); // 1 -> 2 -> 3 -> 4 -> 5
reorderList(a);
printList(a); // 1 -> 5 -> 2 -> 4 -> 3
