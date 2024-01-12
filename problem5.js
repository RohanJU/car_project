// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

let inventory = require("./cars.cjs");

function the_car_model() {
  const car_year = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].car_year < 2000) {
      car_year.push(inventory[i].car_year);
    }
  }
  console.log(car_year.length);
}
the_car_model();
