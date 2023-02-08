function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

// eslint-disable-next-line consistent-return
User.prototype.setAge = function (newAge) {
  /*
  this.age = newAge;
  if (newAge >= 25) {
    // console.log(`The new age of ${this.name} is ${this.age}`);
    console.log(`New photo request was sent for ${this.name}`);
  } else if (newAge < 0) {
    return false;
  } else {
    return newAge;
  }
  */
  if (newAge < 0) {
    return false;
  }

  this.age = newAge;
  if (newAge >= 25) {
    this.requestNewPhoto();
  }
  return newAge;
};

const user1 = new User('Tom', 17);
const user2 = new User('John', 21);

user1.sayHi(); // ==> Hi, I am Tom
user2.requestNewPhoto(); // ==> New photo request was sent for John
// user2.setAge(32); // ==>The new age of John is 32
user2.setAge(32);
