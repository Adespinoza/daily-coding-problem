/**
* Returns a sorted ordering of courses such that we can finish all courses
* @param {Map<string, Set<string>>} courses
* @return {string[]}
*/
function getSortedOrdering(courses) {
  const courseQueue = [];
  const ordering = [];
  const coursesKeys = Array.from(courses.keys());

  // Find classes without dependencies
  for (let i = 0; i < coursesKeys; i++) {
    const courseName = coursesKeys[i];

    if (courses.get(courseName).size === 0) {
      courseQueue.push(courseName);
    }
  }

  // Add queues based on odering and dependencies
  while (courseQueue.length !== 0) {
    const course = courseQueue.shift();
    ordering.push(course);

    for (let i = 0; i < coursesKeys.length; i++) {
      const courseName = coursesKeys[i];
      if (course !== courseName) {
        const courseDependencies = courses.get(courseName);
        if (courseDependencies.has(course)) {
          courseDependencies.delete(course);
          if (courseDependencies.size === 0) courseQueue.push(courseName);
        }
      }
    }
  }

  // Check if Cyclical Graph - No Ordering
  for (let i = 0; i < coursesKeys.length; i++) {
    const courseName = coursesKeys[i];
    if (courses.get(courseName).size !== 0) return [];
  }

  return ordering;
}
