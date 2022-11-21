/*
const user = {
  firstName: "John",
  lastName: "Doe",
};

user.getFullName = function () {
  //  console.log(`${this.firstName} ${this.lastName}`);
  return `${this.firstName} ${this.lastName}`;
};

console.log(user.getFullName());
*/

const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
