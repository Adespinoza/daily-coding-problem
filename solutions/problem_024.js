class Node {
  /**
  * Initialize a binary tree node with a value and/or left and right nodes
  * @param {*} val The value stored in the binary tree node.
  */
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;

    // Additional node info
    this.isLocked = false;
    this.parent = null;
    this.lockedChildCount = 0;
  }
}

/**
 * Return whether the node is locked
 * @param {Node} node
 * @return {boolean}
 */
const isLocked = (node) => {
  return node.isLocked;
}

/**
 * Checks to see if we can lock or unlock this node by checking ancestors and descendants
 * @param {Node} node
 * @return {boolean}
 */
const canLockOrUnlock = (node) => {
  if (node.lockedChildCount > 0) return false;

  // Check descendant isLocked for parent nodes
  let curr = node.parent;
  while (curr !== null) {
    if (curr.isLocked) return false;
    curr = curr.parent;
  }
  return true;
}

/**
 * Tries to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
 * @param {Node} node
 * @return {boolean}
 */
const lock = (node) => {
  if (node === null) return false;

  if (!node.isLocked && canLockOrUnlock(node)) {
    node.isLocked = true;
    // Update count in all ancestors
    let curr = node.parent;
    while (curr !== null) {
      curr.lockedChildCount += 1;
      curr = curr.parent;
    }
    return true;
  }
  return false;
}

/**
 * Unlocks the node.
 * If it cannot be unlocked, then it should return false.
 * Otherwise, it should unlock it and return true.
 * @param {Node} node
 * @return {boolean}
 */
const unlock = (node) => {
  if (node === null) return false;

  if (node.isLocked && canLockOrUnlock(node)) {
    node.isLocked = false;
    // Update count in all ancestors
    let curr = node.parent;
    let curr = node.parent;
    while (curr !== null) {
      curr.lockedChildCount -= 1;
      curr = curr.parent;
    }
    return true;
  }
  return false;
}
