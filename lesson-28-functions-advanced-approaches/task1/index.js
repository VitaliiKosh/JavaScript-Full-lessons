const calc = (initValue) => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },

    mult(value) {
      result *= value;
      return this;
    },

    substract(value) {
      result -= value;
      return this;
    },

    div(value) {
      result /= value;
      return this;
    },

    result() {
      return result;
    },
  };
  return calculator;
};

// const result = calc(3).add(2).mult(4).substract(5).result(); // ==> 15
// const result = calc(3).add(2).mult(4).div(10).substract(5).result(); // ==> -3
const result = calc(7).add(3).mult(5).substract(10).div(10).result(); // ==> 4

console.log(result);
