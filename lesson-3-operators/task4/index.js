/* eslint-disable */
/* оператор || (OR) */
false || true;
console.log('false || true:', false || true); // false || true: true
false || true || false;
console.log('false || true || false:', false || true || false); // false || true || false: true
false || false || false;
console.log('false || false || false:', false || false || false); // false || false || false: false

/* оператор && (AND) */
false && true;
console.log('false && true:', false && true); // false && true: false
false && true && false;
console.log('false && true && false:', false && true && false); // false && true && false: false
true && true && true;
console.log('true && true && true:', true && true && true); // true && true && true: true

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
'text' || false;
console.log("'text' || false:", 'text' || false); // 'text' || false: text
true || 'text';
console.log("true || 'text':", true || 'text'); // true || 'text': true
undefined || null || 0 || '' || null;
console.log(
  "undefined || null || 0 || '' || null:",
  undefined || null || 0 || '' || null
); // undefined || null || 0 || '' || null: null

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);
console.log('amount:', amount); // amount: 17

/* && находит первое ложное значение */
'text' && false;
console.log("'text' && false:", 'text' && false); // 'text' && false: false
true && 'text';
console.log("true && 'text':", true && 'text'); // true && 'text': text
undefined && null && 0 && '' && null;
console.log(
  "undefined && null && 0 && '' && null:",
  undefined && null && 0 && '' && null
); // undefined && null && 0 && '' && null: undefined

/* оператор отрицания (OR) */
!true;
console.log('!true:', !true); // !true: false
!false;
console.log('!false:', !false); // !false: true
!'text';
console.log("!'text':", !'text'); // !'text': false
!!'text';
console.log("!!'text':", !!'text'); // !!'text': true
