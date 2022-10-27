// put your code here
function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  //  console.log(array.sort((a, b) => a - b));
  const n = array.length;
  for (let i = 0; i < n - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < n; j += 1) {
      if (array[j] < array[min]) min = j;
    }
    const t = array[min];
    // eslint-disable-next-line no-param-reassign
    array[min] = array[i];
    // eslint-disable-next-line no-param-reassign
    array[i] = t;
  }
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  //  console.log(array.sort((a, b) => b - a));
  const n = array.length;
  for (let i = 0; i < n - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < n; j += 1) {
      if (array[j] > array[min]) min = j;
    }
    const t = array[min];
    // eslint-disable-next-line no-param-reassign
    array[min] = array[i];
    // eslint-disable-next-line no-param-reassign
    array[i] = t;
  }
  return array;
}

// examples
console.log(sortAsc([1, 5, 18, 2, 9])); // [1, 2, 5, 9, 18]
console.log(sortDesc([1, 5, 18, 2, 9])); // [18, 9, 5, 2, 1]
