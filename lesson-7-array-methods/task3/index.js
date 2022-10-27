const flatArray = (arr) => {
  const flatArray = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flatArray.slice().sort((a, b) => a - b);
};

console.log(flatArray([1, [6, 3, 4], 5, [2]]));
