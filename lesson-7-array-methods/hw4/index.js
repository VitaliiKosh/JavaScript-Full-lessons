function cloneArr(arr) {
  // put your code here
  if (!Array.isArray(arr)) return null;
  const copyCloneArr = arr.slice();
  return copyCloneArr;
}

// examples
console.log(cloneArr([11, 4, 8, 3])); // returns ==> [11, 4, 8, 3]
console.log(cloneArr([])); // returns ==> []
console.log(cloneArr([0])); // returns ==> [0]
console.log(cloneArr(19)); // returns ==> null
