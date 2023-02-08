/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData, userId) {
  // put your code here
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  // put your code here
  Object.assign(userData, { id: userId });
  return userData;
}

function addPropertyV3(userData, userId) {
  // put your code here
  const result3 = Object.assign({}, userData);
  result3.id = userId;
  return result3;
}

function addPropertyV4(userData, userId) {
  // put your code here
  const result4 = { ...userData };
  result4.id = userId;
  return result4;
}

// examples
const user = {
  name: 'Sam',
};

console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '2346589'));
console.log(addPropertyV3(user, '7896546'));
console.log(addPropertyV4(user, '7892546'));
