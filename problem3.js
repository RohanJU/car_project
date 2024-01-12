// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

let inventory = require("./cars.cjs");

function the_car_model() {
    const car_model = [];
    for (let i=0;i<inventory.length;i++){
        car_model.push(inventory[i].car_model.toUpperCase())
    }
    car_model.sort();
    console.log(car_model);
}
the_car_model();
