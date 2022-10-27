const rooms = {
  room1: [
    { name: "Jack" },
    { name: "Andrey" },
    { name: "Ann" },
    { name: "Vasyl" },
  ],
  /*
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
  */
};

/*
const getPeople = (obj) => {
  // put your code here
  for (obj of rooms) {
    Object.keys(obj).forEach((key) => {
      console.log(key);
    });
  }
};

getPeople(rooms);
*/
/*
const result = Object.keys(rooms).map((value, index) =>
  Object.values(rooms[value])
);
console.log(result);
*/

const getPeople = (obj) => {
  // put your code here
  for (i in rooms) {
    console.log(i);
    for (key in filters[i]) {
      console.log;
    }
  }
  console.log(Object.values(rooms));
};
