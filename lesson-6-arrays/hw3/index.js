const checkSum = (arr) => {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }

  let sumOfArrayElements = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sumOfArrayElements += arr[index];
  }

  if (sumOfArrayElements > 100) {
    return true;
  }
  return false;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
console.log(checkSum(-6, -3, 200)); // ===> null
