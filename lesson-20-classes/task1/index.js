class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }

    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }

  static createEmpty() {
    return new User('', null);
  }
}

const user1 = new User('Tom', 17);
const user2 = new User('John', 21);

user1.sayHi(); // ==> Hi, I am Tom
user2.requestNewPhoto(); // ==> New photo request was sent for John
// user2.setAge(32); // ==>The new age of John is 32
user2.setAge(32);
console.log(User.createEmpty());
