/**
 * Returns the maximum values of each subarray of length k
 * @param {number[]} input
 * @param {number} k
 * @return {number[]}
 */
 const getMaxSubArray = (input, k) => {
   // Base case
   if(k > input.length || k <= 0) return [];

   let maxArray = [];
   let subArray = [];
   let count = 0;
   for(let i = 0;  i < input.length; i++) {
     if(count === k) {
       maxArray.push(Math.max(...subArray));
       subArray.shift();
       subArray.push(input[i]);
     } else {
       subArray.push(input[i]);
       count++;
     }
   }
 	// Add final value
   maxArray.push(Math.max(...subArray));

   return maxArray;
 }

 console.log(getMaxSubArray([10, 5, 2, 7, 8, 7], 0)); // []
 console.log(getMaxSubArray([10, 5, 2, 7, 8, 7], 10)); // []
 console.log(getMaxSubArray([10, 5, 2, 7, 8, 7], 3)); // [10, 7, 8, 8]
 console.log(getMaxSubArray([10, 5, 2, 7, 8, 7], 4)); // [10, 8, 8]
 console.log(getMaxSubArray([10, 5, 2, 7, 8, 7], 2)); // [10, 5, 7, 8, 8]
 console.log(getMaxSubArray([10, 5, 2, 7, 8, 7], 1)); // [10, 5, 2, 7, 8, 7]
 console.log(getMaxSubArray([10, 5, 2, 7, 8, 7], 6)); // [10]
