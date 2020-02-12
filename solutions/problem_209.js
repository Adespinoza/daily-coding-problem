/**
 * Find the longest common subsequence of three strings
 * @param  {string} s1
 * @param  {string} s2
 * @param  {string} s3
 * @return {string}
 */
function longestSequence(s1, s2, s3) {
  // Find length of each string
  const m = s1.length;
  const n = s2.length;
  const o = s3.length;

  // Declare 3D array
  const LCS = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() =>
          Array(o)
            .fill(0)
            .map(e => e)
        )
    );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < o; k++) {
        if (i === 0 || j === 0 || k === 0) LCS[i][j][k] = 0;
        else if (s1[i - 1] === s2[j - 1] && s1[i - 1] === s3[k - 1])
          LCS[i][j][k] = LCS[i - 1][j - 1][k - 1] + 1;
        else
          LCS[i][j][k] = Math.max(
            Math.max(LCS[i - 1][j][k], LCS[i][j - 1][k]),
            LCS[i][j][k - 1]
          );
      }
    }
  }

  return LCS[m - 1][n - 1][o - 1];
}

console.log(
  longestSequence(
    'epidemiologist',
    'refrigeration',
    'supercalifragilisticexpialodocious'
  )
); // 5
