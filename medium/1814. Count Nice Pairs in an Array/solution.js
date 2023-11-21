var countNicePairs = function (nums) {
  let res = 0;
  let count = {};

  const rev = (num) => +[...String(num)].reverse().join("");

  for (let n of nums) {
    const r = rev(n);
    cur = count[n - r] || 0;
    res += cur;
    count[n - r] = 1 + cur;
  }

  return res % (10 ** 9 + 7);
};

countNicePairs([42, 11, 1, 97]);
