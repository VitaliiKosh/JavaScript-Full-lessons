/*
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

function getOwnProps(ship) {
  for (let prop in ship) {
    if (ship.hasOwnProperty(prop) && typeof ship[prop] !== "function") {
      console.log(prop);
    }
  }
  return prop;
}

// console.log(Object.keys(ship) && typeof ship.keys !== "function");
console.log(typeof ship.name);
console.log(typeof ship.startMachine);
console.log(typeof ship.stop);
*/

export function getOwnProps(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== "function") {
      return [prop];
    }
  }
  //  return [prop];
}
