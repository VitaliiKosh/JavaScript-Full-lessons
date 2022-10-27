function getSpecialNumbers(from, to) {
  // put your code here
  const specialNumbers = [];

  for (let index = from; index <= to; index += 1) {
    if (index % 3 === 0) {
      specialNumbers.push(index);
    }
  }
  return specialNumbers;
}

// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
