// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

let inventory = require("./cars.cjs");

function the_car_model() {
    const car_year = [];
    for (let i=0;i<inventory.length;i++){
        car_year.push(inventory[i].car_year)
    }
    console.log(car_year);
}
the_car_model();

