const getParsedIntegers = (arr) => {
  const result1 = arr.map((el) => Number.parseInt(el));

  return result1;
};
console.log(getParsedIntegers([4, 5.6, '17', null, NaN, Infinity]));

const getParsedIntegersV2 = (arr) => {
  const result2 = arr.map((el) => parseInt(el));

  return result2;
};
console.log(getParsedIntegersV2([4, 5.6, '17', null, NaN, Infinity]));

const getParsedFloats = (arr) => {
  const result3 = arr.map((el) => Number.parseFloat(el));

  return result3;
};
console.log(getParsedFloats([4, 5.6, '17', null, NaN, Infinity]));

const getParsedFloatsV2 = (arr) => {
  const result4 = arr.map((el) => parseFloat(el));

  return result4;
};
console.log(getParsedFloatsV2([4, 5.6, '17', null, NaN, Infinity]));

// console.log(result1 === result2);

// console.log(result3 === result4);
