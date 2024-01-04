// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

let inventory = require("./cars.cjs");

function type_of_car() {
  const car_make = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].car_make === "Audi" || inventory[i].car_make === "BMW") {
      car_make.push(inventory[i]);
    }
  }
  const myJSON = JSON.stringify(car_make);
  console.log(myJSON);
}

type_of_car();
