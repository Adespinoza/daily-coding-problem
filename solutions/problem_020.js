class Node {
  /**
  * Initializes a node in a linkedlist 
  * @param {*} value
  */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Find the intersecting node from two non-cyclical linked lists
 * @param {Node} llist1
 * @param {Node} llist2
 * @return {Node}
 */
function getIntersection(llist1, llist2) {
  // Base case
  if(llist1 === null) return null;
  if(llist2 === null) return null;

  let llist1Copy = llist1;
  let llist2Copy = llist2;

  // Iterate until nodes intersect
  while(llist1Copy !=== llist2Copy) {
    llist1Copy = llist1Copy !== null ? llist1Copy.next : list2;
    llist2Copy = llist2Copy !== null ? llist2Copy.next : list1;
  }
  return llist1Copy
}
