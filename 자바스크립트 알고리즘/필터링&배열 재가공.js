const numbers = [1, 2, 3, 4, 5, 6];

// 필터링
const ret = numbers.filter((e) => e % 2 == 0);
console.log(ret);

// 배열 재가공
const ret2 = numbers.map((e) => e * e);
console.log(ret2);

let b = [];
for (let a of numbers) {
  b.push(a * a);
}
console.log(b);
