// put your code here
const m = 10;
const n = 20;
let result = 1;
let i = 10;
do {
  if (i % 2 === 1) {
    result *= i;
  }
  i += 1;
} while (i >= m && i <= n);

console.log(result);
