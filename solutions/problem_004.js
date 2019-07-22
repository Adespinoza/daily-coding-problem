const missing_positive = (input) => {
	// Order input from lowest to highest & remove negatives
	var sorted = input.sort().filter(num => num > 0);

	// Find missing element up until the max num in array + 1
	for (var i = 1; i < Math.max(...sorted) + 1; i++) {
		if(!sorted.includes(i)) {
			return i;
		}
	}
	return i;
}

console.log(missing_positive([3, 4, -1, 1]));		// 2
console.log(missing_positive([1, 2, 0]));			// 3
console.log(missing_positive([1, 2, 3, 0]));		// 4
console.log(missing_positive([-1, 1, 0, 4]));		// 2
console.log(missing_positive([]));					// 1