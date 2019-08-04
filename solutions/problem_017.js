/**
* Given a string representing the file system, returns the length of the longest absolute path to a file.
* @param {string} input
* @return {number}
*/
const longestDirectory = (input) => {
  let maxLength = 0;
  let pathLength = [0];

  for(let line of input.split('\n')) {
    let name = line.replace(/^\t+/,'');
    let depth = line.length - name.length;

    // Check for file cases
    if (name.includes('.')) {
      maxLength = Math.max(maxLength, pathLength[depth] + name.length);
    } else {
      pathLength[depth + 1] = pathLength[depth] + name.length + 1;
    }
  }
    return maxLength;
}

console.log(longestDirectory("dir\n\tsubdir1"));  // 0

console.log(longestDirectory("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));  // 20

console.log(longestDirectory("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext")); // 32
