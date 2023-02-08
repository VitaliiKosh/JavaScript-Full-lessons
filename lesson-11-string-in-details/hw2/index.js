const countOccurrences = (text, str) => {
  // put your code here
  if (str === '') return null;

  const count = text.split(str).length - 1;
  return count;
};

console.log(countOccurrences('Halo tebe malo ili ne malo my dear halo', 'alo')); // ==> 4
console.log(countOccurrences('Halo tebe malo ili ne malo my dear halo', '')); // ==> null
