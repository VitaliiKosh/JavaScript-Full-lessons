const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(text) {
    // eslint-disable-next-line prefer-destructuring
    user.firstName = text.split(" ")[0];
    // eslint-disable-next-line prefer-destructuring
    user.lastName = text.split(" ")[1];
  },
};

console.log(user.getFullName());
user.setFullName("Mark Dacascos");
console.log(user.firstName);
console.log(user.lastName);

/*
const name = "John Markus";
const firstName = name.split(" ", [0]);
const lastname = name.split(" ", [1]);
console.log(firstName);
console.log(lastname);
*/
