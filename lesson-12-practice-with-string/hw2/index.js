/* Убирает все пробелы в элементах массивов при условии, что все элементы - строка и добавляет знак доллара
const cleanTransactionsList = (arr) => {
  let trimmedArray = [];
  for (let index = 0; index < arr.length; index += 1) {
    // trimmedArray.push(arr[index].trim());
    trimmedArray.push(`${"$"}` + arr[index].split(" ").join(""));
  }
  return trimmedArray;
};
console.log(
  cleanTransactionsList(["  1.9 ", "16.4", "17", " 1 dollar ", " 18.0 "])
);
*/

const cleanTransactionsList = (arr) => {
  const newArr = arr.slice();
  const trimmedArray = [];
  for (let index = 0; index < newArr.length; index += 1) {
    newArr[index] = +newArr[index];
    //    if (typeof index === "number") {
    if (!isNaN(parseFloat(newArr[index])) && isFinite(newArr[index])) {
      trimmedArray.push(`${"$"}` + newArr[index].toFixed(2));
    }
  }
  return trimmedArray;
};

console.log(cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "])); // ==> ['$1.90', '$16.40', '$17.00']
