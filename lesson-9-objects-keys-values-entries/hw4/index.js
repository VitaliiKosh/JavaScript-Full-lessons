const rooms = {
  room1: [
    { name: "Jack" },
    { name: "Andrey" },
    { name: "Ann" },
    { name: "Vasyl" },
  ],

  room2: [
    { name: "Dan" },
    { name: "Joshua" },
    { name: "Robert" },
    { name: "Fiona" },
  ],

  room3: [
    { name: "Denis" },
    { name: "Max" },
    { name: "Alex" },
    { name: "John" },
  ],
};

const getPeople = (obj) => {
  // put your code here
  /*
  const newArrays = Object.values(obj);
  if (newArrays.length > 0) {
    const result = newArrays
      .reduce((acc, element) => acc.concat(element))
      .map((element) => element.name);
    return result;
  }
  return newArrays;
*/
  return Object.values(obj)
    .reduce((acc, element) => acc.concat(element))
    .map((element) => element.name);
};

console.log(getPeople(rooms));
