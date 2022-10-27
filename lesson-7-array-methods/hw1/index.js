function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) return null;
  return arr.map((number) => number * number);
}

// examples
console.log(squareArray([10, 10, 10, 13])); // ===> [100, 100, 100]
console.log(squareArray([0, 0, 1, 3, 5])); // ===> [0, 0, 1, 9]
console.log(squareArray([-1, 0, -1, 1, 12])); // ===> [1, 0, 1, 1]
