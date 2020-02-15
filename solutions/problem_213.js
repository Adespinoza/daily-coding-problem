/**
 * Finds all combinations of IP addresses
 * @param  {string} s
 * @return {string[]}
 */
function formatIPAddresses(num) {
  const result = [];
  const acc = [];

  const dfs = (arr, s) => {
    const prev = arr[arr.length - 1];
    if (prev > 255) return false;
    if (arr.length < 4 && s === '') return false;
    if (prev && prev.length > 1 && prev[0] === '0') return false;

    if (arr.length === 3) {
      if (s > 255 || (s.length > 1 && s[0] === '0')) return false;

      result.push([...arr, s].join('.'));
      return true;
    }

    for (let i = 1; i < 4; i++) {
      dfs([...arr, s.slice(0, i)], s.slice(i));
    }
    return true;
  };

  dfs(acc, num);
  return result;
}

console.log(formatIPAddresses('2542540123'));
