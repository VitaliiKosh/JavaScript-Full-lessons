// mutating method
/*
const sortDesc = (numbers) => {
  function compare(a, b) {
    if (a < b) {
      return 1;
    }
    return -1;
  }

  numbers.sort(compare);

  return numbers;
};

console.log(sortDesc([1, 6, 2, 9, 15, 7, 8, 3]));
*/

// mutating method
/*
const sortDesc = (numbers) => {
  numbers.sort((a, b) => b - a);

  return numbers;
};

console.log(sortDesc([1, 6, 2, 9, 15, 7, 8, 3]));
*/

// not mutating methods
/*
const sortDesc = (numbers) => {
  const copyArr = numbers.slice();
  copyArr.sort((a, b) => b - a);

  return copyArr;
};

console.log(sortDesc([1, 6, 2, 9, 15, 7, 8, 3]));
*/

const sortDesc = (numbers) => numbers.slice().sort((a, b) => b - a);

console.log(sortDesc([1, 6, 2, 9, 15, 7, 8, 3]));
