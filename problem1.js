
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of: 

let inventory = require("./cars.cjs");


function carDetail(id) { 
    for(let i = 0; i < inventory.length; i++) {
    if(inventory[i].id===33){
        console.log('Last car is a' + inventory[i].car_make + inventory[i].car_model);}
    }
}
carDetail(33);

