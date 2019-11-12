/**
 * Finds level of tree with minimum sum
 * @param  {TreeNode} root
 * @return {Number}
 */
function minTreeSum(root) {
  // Base case
  if (root === null) return 0;

  const queue = [root];
  let sum = root.val;
  let level = 1;
  let result = 1;

  while (queue.length) {
    const tempQueue = [];
    level += 1;

    // Retrieve nodes at each level
    while (queue.length) {
      const node = queue.shift();
      if (node.left) tempQueue.push(node.left);
      if (node.right) tempQueue.push(node.right);
    }

    // Calculate sum at each level
    let tempSum = 0;
    tempQueue.forEach(node => {
      tempSum += node.val;
    });

    // Update if current level is less than previous
    if (tempSum < sum) {
      result = level;
      sum = tempSum;
    }

    // Push (old) contents back into queue
    queue.push(...tempQueue);
  }

  return result;
}
