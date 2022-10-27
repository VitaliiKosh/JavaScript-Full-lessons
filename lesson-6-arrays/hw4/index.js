const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const copyEvenEl = arr.slice();
  for (let index = 0; index < copyEvenEl.length; index += 1) {
    if (copyEvenEl[index] % 2 === 0) {
      copyEvenEl[index] += delta;
    }
  }
  return copyEvenEl;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
