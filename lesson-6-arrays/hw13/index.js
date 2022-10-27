// put your code here
function uniqueCount(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }

  const uniqArr = Array.from(new Set(arr));
  return uniqArr.length;
}

// examples
console.log(uniqueCount([1, 2, 1, 5, 18, 5, 2, 1, 9])); // ===> 5
console.log(uniqueCount([2, 2, 2, 2, 2, 5])); // ===> 2
console.log(uniqueCount([1])); // ===> 1
console.log(uniqueCount(1)); // ===> null
console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8])); // ===> 4
