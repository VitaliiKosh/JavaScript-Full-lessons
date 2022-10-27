// put your code here
function removeDuplicates(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }

  const uniqArr = Array.from(new Set(arr));
  return uniqArr;
}

// examples
console.log(removeDuplicates([1, 2, 1, 5, 18, 5, 2, 1, 9])); // ===> [1, 2, 5, 9, 18]
console.log(removeDuplicates([2, 2, 2, 2, 2, 5])); // ===> [2, 5]
console.log(removeDuplicates([1])); // ===> [1]
console.log(removeDuplicates(1)); // ===> null
