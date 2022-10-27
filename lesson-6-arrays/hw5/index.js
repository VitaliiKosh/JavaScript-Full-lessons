// put your code here
function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const copyReverseArray = arr.slice();
  copyReverseArray.reverse();
  return copyReverseArray;
}

console.log(reverseArray([10, 100, 1000]));
console.log(reverseArray([10, 99, 1]));
console.log(reverseArray([-6, -3, 200]));
console.log(reverseArray(-6, -3, 200));
