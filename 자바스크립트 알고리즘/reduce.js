const numbers = [1, 2, 3, 4, 5];
const ret = numbers.reduce((total, e) => total + e, 0);
const ret2 = numbers.reduce((total, e) => total + e, 100);
console.log(ret);
console.log(ret2);

/**
 * 이외에도
 * findm findIndex, includes
 * substring, slice
 * Object.keys, Object.values, Object.entries
 * Math.round, Math.ceil, Math.floor, Math.abs 사용법 익혀주세요.
 *
 */
