/* eslint-disable default-case */

export const calc = (expression) => {
  if (typeof expression !== 'string') {
    return null;
  }

  const [a, operation, b] = expression.split(' ');
  let result;

  switch (operation) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc('4 + 3') + typeof calc('4 + 3')); // ==> 4 + 3 = 7
console.log(calc('11 - 2')); // ==> 11 - 2 = 9
console.log(calc('5 * 5')); // ==> 5 * 5 = 25
console.log(calc('49 / 7')); // ==> 49 / 7 = 7
console.log(calc(4 + 3)); // ==> null
