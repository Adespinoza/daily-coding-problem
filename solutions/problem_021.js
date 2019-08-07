const classroomLecture = (input) => {
  // Base case
  if(input.length === 0 || input === null) return 0;

  const startingTimes = [];
  const endingTimes = [];

  for (let i = 0; i < input.length; i++) {
    const [startTime, endTime] = input[i];

    startingTimes[i] = startTime;
    endingTimes[i] = endTime;
  }

  // Sort into increasing order
  startingTimes.sort((a,b) => a - b);
  endingTimes.sort((a,b) => a - b);

	let maxClassrooms = 0;
  let currClassrooms = 0;

  // Seperate iterators
  let sIndex = 0;
  let eIndex = 0;

  while(sIndex < startingTimes.length || eIndex < endingTimes.length) {
  	if(sIndex > startingTimes.length) break;

    if (startingTimes[sIndex] < endingTimes[eIndex]) {
    	// Move starting index times
    	currClassrooms++;
      sIndex++;
    } else {
    	currClassrooms--;
      eIndex++;
    }
    // Take max value
    maxClassrooms = Math.max(maxClassrooms, currClassrooms);
  }
  return maxClassrooms;
}

console.log(classroomLecture([[30, 75], [0, 50], [60, 150]]));	// 2
console.log(classroomLecture([[30, 75], [0, 50], [10, 60], [60,150]])); // 3
console.log(classroomLecture([[30, 75]]));	// 1
console.log(classroomLecture([[0, 50], [50, 60]]));	// 1
