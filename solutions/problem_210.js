/**
 * Test the Collatz conjecture
 * @param  {number} n
 * @return {number}
 */
function collatzSeq(n) {
  let count = 0;

  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count += 1;
  }

  return { n, hops: count };
}

console.log(collatzSeq(10)); // { n: 1, hops: 6 }
console.log(collatzSeq(100)); // { n: 1, hops: 25 }
console.log(collatzSeq(10000)); // { n: 1, hops: 29 }
console.log(collatzSeq(1000000)); // { n: 1, hops: 152 }
