/* const arrAverage = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce(function (acc, num) {
    return (acc + num) / arr.length;
  }, 0);
};
console.log(arrAverage([2, 5, 6, 3]));
*/

const arrAverage = (arr) => {
  return arr.reduce((acc, num) => acc + num) / arr.length;
};
console.log(arrAverage([2, 5, 6, 3]));
