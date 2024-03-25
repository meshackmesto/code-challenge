// prompt the user to enter his/her details
const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Please enter your name: ");
const speed = prompt("Please enter your speed: ");

//The below lines is the  code that will be executed if the user enters his/her details"
function speeding(speed){
    if (speed <70){
    return "Ok";
    } else { 
        let demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
    }
}
