/**
 * TreeNode Constructor
 * @param {(number | string)} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Computes in order traversal
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * n - number of nodes
 * @param {TreeNode} root
 */
function morrisTraversal(root) {
  let current = root;
  let inOrder = ``;

  while (current !== null) {
    // check left node
    if (current.left === null) {
      inOrder += `${current.val} `;
      current = current.right;
    } else {
      // Find the predecessor of current
      let pre = current.left;
      while (pre.right !== null && pre.right !== current) pre = pre.right;

      // Make current as right child of its in-order predecessor
      if (pre.right === null) {
        pre.right = current;
        current = current.left;
      } else {
        //  Revert the changes  (fix right predecssor)
        pre.right = null;
        inOrder += `${current.val} `;
        current = current.right;
      }
    }
  }

  return inOrder;
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

/* 
Constructed binary tree:
               1 
             /   \ 
            2      3 
          /  \ 
        4     5 
*/

console.log(morrisTraversal(a)); // 4 -> 2 -> 5 -> 1 -> 3
