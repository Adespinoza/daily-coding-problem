/**
 * Returns the units of water remain trapped on the map
 * @param {number[]} blockHeights
 * @return {number}
 */
function captureRain(blockHeights) {
  // Left & Right pointers at beginning and end
  let left = 0;
  let right = blockHeights.length - 1;

  let totalWater = 0;
  let currMaxLeftHeight = 0;
  let currMaxRightHeight = 0;

  while(left < right) {
    if (blockHeights[left] <= blockHeights[right]) {
      // there cannot be water trapped
      if (blockHeights[left] >= currMaxLeftHeight){
        currMaxLeftHeight = blockHeights[left];
      } else {
        const currWaterTrapped = currMaxLeftHeight - blockHeights[left];
        totalWater += currWaterTrapped;
      }
      // Move left pointer forward
      left++;
    } else {
      // there cannot be water trapped
      if(blockHeights[right] >= currMaxRightHeight) {
        currMaxRightHeight = heights[right];
      } else {
        const currWaterTrapped = currMaxRightHeight - blockHeights[right];
        totalWater += currWaterTrapped;
      }
      // Move right pointer left
       right--;
    }
  }
  return totalWater;
}

console.log(captureRain([2,1,2]));  // 1
console.log(captureRain([3, 0, 1, 3, 0, 5])); // 8
