// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Find most frequent subtree sum
 * @param  {TreeNode} root
 * @return {number[]}
 */
function subtreeSum(root) {
  // base case
  if (!root) return null;

  const map = new Map();
  let max = 0;

  const traverse = currRoot => {
    if (!currRoot) return 0;
    const sum =
      currRoot.val + traverse(currRoot.left) + traverse(currRoot.right);
    map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1);
    max = Math.max(max, map.get(sum));
    return sum;
  };

  traverse(root);

  return [...map].filter(it => it[1] === max).map(it => it[0]);
}

const a = new TreeNode(5);
const b = new TreeNode(2);
const c = new TreeNode(-5);

a.left = b;
a.right = c;

console.log(subtreeSum(a)); // [2]

const d = new TreeNode(5);
const e = new TreeNode(2);
const f = new TreeNode(-3);

d.left = e;
d.right = f;

console.log(subtreeSum(d)); // [2, -3, 4]
