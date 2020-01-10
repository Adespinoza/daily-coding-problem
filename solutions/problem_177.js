function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Rotate list right
 * @param  {ListNode} head
 * @param  {number}
 * @return {ListNode}
 */
function rotateListRight(head, k) {
  // base case
  if (head.next === null || head === null) return null;

  // create a runner to go to last node
  let count = 0;
  let runner = head;
  while (runner.next !== null) {
    count += 1;
    runner = runner.next;
  }

  // find node right before split
  let slowRunner = head;
  const slowHead = head;
  for (let i = 0; i < count - k; i++) {
    slowRunner = slowRunner.next;
  }

  // change reference pointers
  const newHead = slowRunner.next;
  slowRunner.next = null;
  runner.next = slowHead;

  return newHead;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let newHead = rotateListRight(a, 3);
let list1 = '';
while (newHead !== null) {
  list1 += `${newHead.val} -> `;
  newHead = newHead.next;
}

console.log(`${list1}null`);

const f = new ListNode(7);
const g = new ListNode(7);
const h = new ListNode(3);
const i = new ListNode(5);

f.next = g;
g.next = h;
h.next = i;

let newerHead = rotateListRight(f, 2);
let list2 = '';
while (newerHead !== null) {
  list2 += `${newerHead.val} -> `;
  newerHead = newerHead.next;
}

console.log(`${list2}null`);
