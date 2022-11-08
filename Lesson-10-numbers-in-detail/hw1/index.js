/*
function getTotalPrice(arr) {
  const amount = arr.reduce((acc, el) => {
    return (acc += el);
  }, 0);
  // console.log(amount);
  //  return Math.floor(amount * 100) / 100;
  return amount.toFixed(2);
}
console.log(getTotalPrice([3.658, 12.799, 3.254, 5.632]));
*/

function getTotalPrice(arr) {
  const amount = arr.reduce((acc, num) => acc + num);
  // console.log(amount);
  // return Math.floor(amount * 100) / 100;
  // return amount.toFixed(2);
  return "$" + Math.floor(amount * 100) / 100;
}
console.log(getTotalPrice([3.658, 12.799, 3.254, 5.632]));
