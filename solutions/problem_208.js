/**
 * ListNode Definition
 * @param       {*} val
 * @constructor
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Partitions a Linked List so nodes < k are on the left
 * Time Complexity: O(n)
 * @param  {ListNode} head
 * @param  {ListNode} k
 * @return {ListNode}
 */
function partitionList(head, k) {
  if (!head || k < 0) return null;

  let lessThan = new ListNode();
  let greaterThan = new ListNode();
  const lessRunner = lessThan;
  const greaterRunner = greaterThan;
  let runner = head;

  while (runner) {
    if (runner.val < k) {
      lessThan.next = runner;
      lessThan = lessThan.next;
    } else {
      greaterThan.next = runner;
      greaterThan = greaterThan.next;
    }
    runner = runner.next;
  }

  lessThan.next = greaterRunner.next;
  return lessRunner.next;
}

/* EXAMPLE */
const a = new ListNode(5);
const b = new ListNode(1);
const c = new ListNode(8);
const d = new ListNode(0);
const e = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let curr = a;
let list = '';
while (curr.next) {
  list += `${curr.val} -> `;
  curr = curr.next;
}

console.log(`${list}${curr.val}`); // 5 -> 1 -> 8 -> 0 -> 3

curr = partitionList(a, 3);
list = '';
while (curr.next) {
  list += `${curr.val} -> `;
  curr = curr.next;
}

console.log(`${list}${curr.val}`); // 1 -> 0 -> 5 -> 8 -> 3
