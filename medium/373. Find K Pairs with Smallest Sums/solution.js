/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  let pairs = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const pair = [nums1[i], nums2[j]];
      pair.sort((a, b) => a - b);

      pairs.push(pair);
    }
  }

  pairs.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log(pairs.slice(0, k));
};

kSmallestPairs([1, 7, 11], [2, 4, 6], 3);
