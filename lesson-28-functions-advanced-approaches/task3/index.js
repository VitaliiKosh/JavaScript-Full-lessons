const mult = (value1) => (value2) => value1 * value2;

const twice = mult(7);
const result1 = twice(2);

const triple = mult(9);
const result2 = triple(3);

console.log(mult(5)(4)); // ==> 20
console.log(result1); // ==> 14
console.log(result2); // ==> 27
