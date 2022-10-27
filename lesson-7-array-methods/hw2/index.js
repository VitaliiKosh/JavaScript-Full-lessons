function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  const copyReverseArray = arr.slice();
  copyReverseArray.reverse();
  return copyReverseArray;
}

// examples
reverseArray([11, 4, 8, 3]); // ==> [3, 8, 4, 11]
reverseArray([]); // ==> []
reverseArray([100, 50]); // ==> [50, 100]
