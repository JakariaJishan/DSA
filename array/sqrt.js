const mySqrt = function (x) {
  let max = x;
  let min = 0;
  let mid;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (mid * mid == x) {
      return mid;
    }
    if (mid * mid > x) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return mid;
};
console.log(mySqrt(1000));
