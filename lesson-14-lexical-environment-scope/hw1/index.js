// const calculatorWithMemory = () => {
let firstNumber = 0;

export function add(num1) {
  firstNumber += num1;
}

export function decrease(num2) {
  firstNumber -= num2;
}

export function reset() {
  firstNumber = 0;
}

export function getMemo() {
  return firstNumber;
}

console.log(add(5));
console.log(decrease(3));
console.log(reset());
console.log(getMemo());
