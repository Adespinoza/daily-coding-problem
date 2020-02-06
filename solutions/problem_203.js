/**
 * Find the minimum element in a rotated array
 * @param  {number[]} nums
 * @return {number}
 */
function minPivotNum(nums) {
  if (nums.length === 0) return null;

  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
}

console.log(minPivotNum([5, 7, 10, 3, 4])); // 3
console.log(minPivotNum([1, 2, 3, 3, 5])); // 1
console.log(minPivotNum([5, 4, 3, 2, 1])); // 1
console.log(minPivotNum([10])); // 10
console.log(minPivotNum([])); // null
