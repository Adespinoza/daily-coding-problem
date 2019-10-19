/**
 * Finds the maximum path sum between two nodes
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
  // set result in the first element of max
  const max = [Number.MIN_SAFE_INTEGER];
  maxPathSumHelper(root, max);
  return max[0];
}

function maxPathSumHelper(root, max) {
  if (root === null) return 0;

  // do not include negatives to our sum
  const leftMax = Math.max(0, maxPathSumHelper(root.left, max));
  const rightMax = Math.max(0, maxPathSumHelper(root.right, max));

  max[0] = Math.max(max[0], leftMax + rightMax + root.val);

  // return the sum of branch
  return root.val + Math.max(leftMax, rightMax);
}