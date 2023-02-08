/*
const getFiniteNumbers = (arr) => {
  return arr.filter((el) => Number.isFinite(el));
};
console.log(getFiniteNumbers([4, 5.6, "17", null, NaN, Infinity]));

const getFiniteNumbersV2 = (arr) => {
  return arr.filter((el) => isFinite(el));
};
console.log(getFiniteNumbersV2([4, 5.6, "17", null, NaN, Infinity]));

const getNaN = (arr) => {
  return arr.filter((el) => Number.isNaN(el));
};
console.log(getNaN([4, 5.6, "17", null, NaN, Infinity]));

const getNaNV2 = (arr) => {
  return arr.filter((el) => isNaN(el));
};
console.log(getNaNV2([4, 5.6, "17", null, NaN, Infinity]));

const getIntegers = (arr) => {
  return arr.filter((el) => Number.isInteger(el));
};
console.log(getIntegers([4, 5.6, "17", null, NaN, Infinity]));
*/

const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));
console.log(getFiniteNumbers([4, 5.6, '17', null, NaN, Infinity]));

const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));
console.log(getFiniteNumbersV2([4, 5.6, '17', null, NaN, Infinity]));

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));
console.log(getNaN([4, 5.6, '17', null, NaN, Infinity]));

const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));
console.log(getNaNV2([4, 5.6, '17', null, NaN, Infinity]));

const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));
console.log(getIntegers([4, 5.6, '17', null, NaN, Infinity]));
