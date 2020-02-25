/**
 * Find shortest standardized path given an absolute pathname
 * Time Complexity: O(n)
 * @param {string} path
 */
function simplifyPath(path) {
  const stack = [];
  path = path.split('/');

  for (let i = 0; i < path.length; i++) {
    if (path[i] === '.' || path[i] === '') continue;
    if (path[i] === '..') stack.pop();
    else stack.push(path[i]);
  }

  return `/${stack.join('/')}`;
}

console.log(simplifyPath('/usr/bin/../bin/./scripts/../')); // '/usr/bin/'
console.log(simplifyPath('/a//b////c/d//././/..')); // '/a/b/c'
console.log(simplifyPath('/a/./b/../../c/')); // '/c'
