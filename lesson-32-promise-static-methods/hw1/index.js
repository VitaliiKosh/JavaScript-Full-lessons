/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = (num) => {
  // put you code here
  return Promise.resolve(num);
  //  .then((numbers) => console.log(numbers));
  /*
  const p = new Promise((resolve) => {
    resolve(num);
  });
  return p;
  */
};

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
