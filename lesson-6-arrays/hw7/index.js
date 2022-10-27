// put your code here
function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  if (max + min > 1000) {
    return true;
  }
  return false;
}

console.log(checker([500, 700, 900, 1000])); // true
console.log(checker([10, 25, 50, 68])); // false
console.log(checker(1, 2, 3, 4, 5)); // null
