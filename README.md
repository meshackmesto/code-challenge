##`GRADING SYSTEM`
First of all the user is reqiured to input here details so that the code can be executed.
```js
const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Please enter your name: ");
const grade = prompt("Please enter your grade: ");
```
After inputation, the students would be automatically be graded according to there performance in which there grade would be scaled according to grade from(A,B,C,D,e)
If the student scores a minimum of 80 and above he will be graded "A"
```js
 if (grade >=80){
        return "A";
 }
 ```
If the student scores between 60 to 79, he will be graded  "B"
```js
else if (grade >=60) {
        return "B";
}
```
If the student scores between 50 to 59, he will be graded  "C"
```js
else if (grade >=49) {
        return "C";
}
```
If the student scores between 40 to 49, he will be grade  "D"
```js
else if (grade >=40) {
        return "D";
}
```
Any student scoring below 40 will be grade  "E".
```js
else if (grade < 40) {
        return "E";
}
```


##`SPEEDDETECTOR`
First of all the user is reqiured to input here details so that the code can be executed.
```js
const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Please enter your name: ");
const speed = prompt("Please enter your speed: ");
```

The speeding function check if the speed inputed is above the required limit of 70, if it's below 70 it responds by printing out ok
```js
 if (speed <70){
    return "Ok";
 }
 ```
If the speed inputed is above 70,the demerit points are calculated whereby the diferrence of the speed inputed with the required speed of 70 is divided by 5kms using math.floor to get an intreger rather than a decimal valueso as to get the demerit points gunnered.
```js
else { 
        let demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints > 12) {
    console.log("License suspended");
  }
    }
```
If the demerit points gunnered are above 12 the return statement will be the license is suspended but if the demerit points are less or equal to 12 the return statemnet will be the points gunnered.
```js
 else {
    console.log(`Points: ${demeritPoints}`);
  }
  ```
##`NET SALARY`
