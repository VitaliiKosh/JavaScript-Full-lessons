const vehicle = {
  //  name: "Argo",
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: "Argo",
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    vehicle.move.call(ship);
  },
  stopMachine() {
    vehicle.stop.call(ship);
    console.log(`${this.name} lifting anchor down`);
  },
  //  __proto__: vehicle,
};

Object.setPrototypeOf(ship, vehicle);

ship.startMachine(); // ==> Argo lifting anchor up
// ==> Argo is moving
ship.stopMachine(); // ==> Argo stopped
// ==> Argo lifting anchor down
