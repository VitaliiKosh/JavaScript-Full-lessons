// put your code here
function getSum(firstNumber, secondNumber) {
  let sum = 0;
  for (let i = firstNumber; i <= secondNumber; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum(1, 6)); // 12
console.log(getSum(10, 20)); // 90
console.log(getSum(5, 20)); // 104
