class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Returns the largest node in binary search tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function findLargestNode(root) {
  let curr = root;
  while(curr !== null) {
    curr = curr.right;
  }
  return curr;
}

/**
 * Returns the predecessor of node in binary search tree
 * @param {TreeNode} root
 * @param {TreeNode} maxNode
 * @return {TreeNode}
 */
function findSecondLargest(root, maxNode) {

  // Check if maxNode has a left child
    // If it exists, it's the second largest
    // (see Scenario #2 below)
  if (maxNode.left !== null) {
      let curr = maxNode.left;
      while (curr.right !== null) {
        curr = curr.right;
      }
      return curr;
  }

  // Check right subtree if max is last on right
  let lastRight = null;
  let curr = root;

  while (curr.val !== maxNode.val) {
      if (curr.val < maxNode.val) {
        lastRight = curr;
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return lastRight;
  }
}


/*
* SCENARIO #1:
*      10
*     /
*    5
*      \
*       8
*/

/*
* SCENARIO #2:
*         10
*       /   \
*     5      20
*               \
*                30
*               /
*             25
*/

/*
* SCENARIO #3:
*         10
*       /   \
*     5      20
*               \
*                30
*/
