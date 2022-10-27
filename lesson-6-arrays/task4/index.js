function swap(numbers) {
  // put your code here
  const [start, ...rest] = numbers;

  return [...rest, start];
}

function swapManual(numbers) {
  // put your code here
  const copySwapManual = numbers.slice();
  const first = copySwapManual.shift();
  copySwapManual.push(first);
  return copySwapManual;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
