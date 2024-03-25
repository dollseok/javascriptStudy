const a = [1, 2, 3, 4, 5, 6, 7, 8];

// 이분탐색 (Binary Search)
const bs = () => {
  let lo = 0;
  let hi = a.length - 1;
  const target = 10;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (a[mid] == target) {
      return `${target} 찾았다`;
    } else if (a[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
};

const ret = bs();

console.log(ret);
