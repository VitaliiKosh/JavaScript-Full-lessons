export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  const copyReverseArray = arr.slice();
  copyReverseArray.reverse();
  return copyReverseArray;
};
// examples
console.log(reverseArray([11, 4, 8, 3])); // ==> [3, 8, 4, 11]
console.log(reverseArray([])); // ==> []
console.log(reverseArray([100, 50])); // ==> [50, 100]
console.log(reverseArray("11, 4, 8, 3"));

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (amount > balances[index]) {
    return -1;
  }
  // eslint-disable-next-line no-param-reassign
  balances[index] -= amount;
  return balances[index];
};
// example 1:
// input
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
// output
// 37
// и массив balances должен быть [1400, 37, -6]
// example 2:
// input
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));
// output
// -1
// и массив balances должен быть [1400, 87, -6]
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 1350)); // ==> 50
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 60)); // ==> 27
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10)); // ==> -1

/* eslint-disable no-restricted-syntax */
/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */
export const getAdults = (obj) => {
  // put your code here
  const filtered = {};
  for (const key in obj) {
    if (obj[key] >= 18) filtered[key] = obj[key];
  }
  return filtered;
};
// examples
console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
console.log(getAdults({ "Max Payne": 16, Josetta: 17, Clarence: 14 })); // ==> {}
console.log(getAdults({ Adrian: 45, Alex: 37, Robert: 15, Marek: 64 })); // ==> {Adrian: 45, Alex: 37, Marek: 64}
