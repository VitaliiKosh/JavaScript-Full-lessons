function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }

  const copySquareArray = arr.slice();
  for (let index = 0; index < copySquareArray.length; index += 1) {
    copySquareArray[index] *= copySquareArray[index];
  }
  return copySquareArray;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
