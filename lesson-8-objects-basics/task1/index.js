const transformToObject = (arr) => {
  // put your code here
  const obj = {};

  arr.forEach((el) => {
    obj[el] = el;
  });

  return obj;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
