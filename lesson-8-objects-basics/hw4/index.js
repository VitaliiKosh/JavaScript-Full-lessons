/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
  const filtered = {};

  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    props.forEach(function (arrayElement) {
      if (key === arrayElement) filtered[key] = obj[key];
    });
  }
  return filtered;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3, d: 5 }, ["a", "c", "d", "hex"])); // ==> { a: 1, c: 3, d: 5 }
