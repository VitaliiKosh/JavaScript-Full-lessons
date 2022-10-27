/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const getAdults = (obj) => {
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
