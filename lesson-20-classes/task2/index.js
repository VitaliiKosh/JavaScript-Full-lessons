class Vehicle {
  constructor(name, numberofWheels) {
    this.numberofWheels = numberofWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, numberofWheels, maxSpeed) {
    super(name, false);
    this.maxSpeed = maxSpeed;
    this.numberofWheels = numberofWheels;
  }

  //  name: "Argo",

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}
