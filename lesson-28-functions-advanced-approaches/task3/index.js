export const mult = (a) => (b) => a * b;

export const twice = mult(2);
const result1 = twice(7);

export const triple = mult(3);
const result2 = triple(9);

console.log(mult(5)(4)); // ==> 20
console.log(result1); // ==> 14
console.log(result2); // ==> 27
