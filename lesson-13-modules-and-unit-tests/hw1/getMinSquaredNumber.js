const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const numAbs = arr.map((num) => Math.abs(num));
  const min = Math.min(...numAbs);

  return min ** 2;
};

console.log(getMinSquaredNumber([-7, 3, -2, 6, 45, -20])); // ==> 4
console.log(getMinSquaredNumber('-7, 3, -2, 6, 45, -20')); // ==> null
console.log(getMinSquaredNumber([])); // ==> null

/*
let min = arr[0];
  for (let index = 0; index < arr.length; index += 1) {
    arr[index] = Math.abs(arr[index]);
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return Math.abs(min) ** 2;
};
*/
