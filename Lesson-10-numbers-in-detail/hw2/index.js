const getRandomNumbers = (length, from, to) => {
  const min = Math.ceil(from);
  const max = Math.ceil(to);
  if (from > to || max === min) {
    return null;
  }

  // eslint-disable-next-line no-array-constructor
  const arr = new Array();
  arr.length = length;
  // console.log(arr);
  return (
    arr
      .fill()
      // eslint-disable-next-line no-return-assign, no-param-reassign
      .map((num) => (num = Math.trunc(Math.random() * (max - min) + min)))
  );
};

console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
