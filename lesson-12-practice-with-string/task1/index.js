const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result;

  // eslint-disable-next-line default-case
  switch (operator) {
    case "+":
      result = Number(a) + +b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }
  return `${expression} = ${result}`;
};

console.log(calc("4 + 3")); // ==> 4 + 3 = 7
console.log(calc("11 - 2")); // ==> 11 - 2 = 9
console.log(calc("5 * 5")); // ==> 5 * 5 = 25
console.log(calc("49 / 7")); // ==> 49 / 7 = 7
