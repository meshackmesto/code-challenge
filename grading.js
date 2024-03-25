// prompt the user to enter his/her details
const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Please enter your name: ");
const grade = prompt("Please enter your grade: ");

//The below lines is the  code that will be executed if the user enters his/her details"
// Grading according the way each studdent has performed.
function gradeSystem(grade){
    if (grade >=80){
        return "A"
    }else if (grade >=60) {
        return "B";
    }else if (grade >=49) {
        return "C";
    }else if (grade >=40) {
        return "D";
    }else if (grade < 40) {
        return "E";
}
}
console.log(`Hello, ${name}! Your grade is ${gradeSystem(grade)}.`);