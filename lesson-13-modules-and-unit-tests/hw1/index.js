const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr === []) {
    return null;
  }

  let min = arr[0];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return Math.floor(min) ** 2;
};

console.log(getMinSquaredNumber([-7, 3, -2, 6, 45, -20.45]));

// const min = Math.min(...arr);
