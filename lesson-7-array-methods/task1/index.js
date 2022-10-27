/*
const getSpecialNumbers = (numbers) => {
  const specialNumbers = [];

   for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0) {
      specialNumbers.push(numbers[i]);
    }
  }
  return specialNumbers;
};

console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
*/

/*
const getSpecialNumbers = (numbers) => {
  const specialNumbers = [];

  function checkIfSpecialNumber(num) {
    if (num % 3 === 0) {
      specialNumbers.push(num);
    }
  }

  numbers.forEach(checkIfSpecialNumber);
  return specialNumbers;
};

console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
*/

/*
const getSpecialNumbers = (numbers) => {
  const specialNumbers = [];

  const result = numbers.filter((num) => {
    return num % 3 === 0;
  });

  return result;
};

console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
*/

const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
