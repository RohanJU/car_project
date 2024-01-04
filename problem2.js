// The dealer needs the information on the last car in their inventory.Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:

//"Last car is a *car make goes here* *car model goes here*"

let inventory = require("./cars.cjs");

function lastcarDetail(id) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === inventory.length)
      console.log(
        "Last car is a" + inventory[i].car_make + inventory[i].car_model
      );
  }
}
carDetail(inventory.length);
