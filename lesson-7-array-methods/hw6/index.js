const sum = (arr) => {
  if (!Array.isArray(arr)) return null;
  const sumArrEl = arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  return sumArrEl;
};

console.log(sum([1, 2, 3, 4])); // ==> 10
console.log(sum([2, 3, 5, 6])); // ==> 16
