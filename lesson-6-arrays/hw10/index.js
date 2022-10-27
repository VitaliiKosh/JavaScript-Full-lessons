const getSubArray = (arr, numberOfElements) => {
  const copyGetSubArray = arr.slice(0, numberOfElements);
  return copyGetSubArray;
};

// examples
console.log(getSubArray([11, 4, 8, 3], 2)); // ==> [11, 4]
console.log(getSubArray([1, 2, 3, 4, 5], 3)); // ==> [1, 2, 3]
console.log(getSubArray(["some string", "hello", "I am happy"], 2)); // ==> ['some string', 'hello']
