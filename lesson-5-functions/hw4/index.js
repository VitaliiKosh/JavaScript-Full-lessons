// put your code here
function findDivCount(a, b, n) {
  let count = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      count += 1;
    }
  }
  return count;
}

console.log(findDivCount(1, 8, 2)); // 4
console.log(findDivCount(1, 8, 3)); // 2
console.log(findDivCount(1, 12, 4)); // 3
console.log(findDivCount(1, 25, 5)); // 5
console.log(findDivCount(1, 30, 5)); // 6
