/* eslint-disable */

export function createArrayOfFunctions(num) {
  if (typeof num !== "number" && num !== undefined) return null;
  //  if (num === undefined) return [];

  var arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

console.log(createArrayOfFunctions(9)[5]()); // ==> 5

/*
let num = 9;
var arr = [];
for (let i = 0; i < num; i += 1) {
  arr[i] = function () {
    return i;
  };
}
console.log(arr[5]()); // ==> 5
*/
