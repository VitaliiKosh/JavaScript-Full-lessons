// put your code here
function increaser(a, index) {
  if (a > index) {
    return a + index;
  }
  return a;
}

console.log(increaser(5, 2));
console.log(increaser(3, 3));
console.log(increaser(2, 5));
