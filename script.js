"use stict";

// exercise 1

let userAge = prompt("How old are you");
let userEngagement;

if (userAge <= 17) {
  userEngagement = confirm("Do you study at school?");
} else if (userAge < 25) {
  userEngagement = confirm("Do you study at university?");
} else if (userAge < 60) {
  userEngagement = confirm("Do you have a job?");
} else {
  userEngagement = prompt("What are you doing");
}

// exercise 2

let propertyValue = prompt("Input a property value: 'display:'");

switch (propertyValue) {
  case "block":
    alert("Set'display: block;'");
    break;
  case "flex":
    alert("Set'display: flex;'");
    break;
  case "grid":
    alert("Set'display: grid;'");
    break;
  case "inline":
    alert("Set'display: inline;'");
    break;
  case "none":
    alert("Set'display: none;'");
    break;
  default:
    alert("Set'display: inline-block;'");
    break;
}

// exercise 3

let positiveNumber = prompt("Please enter a positive number");
let total = +positiveNumber * 12;

while (!total || total < 1) {
  positiveNumber = prompt(
    "Your number is incorrect, please enter a correct number"
  );
  total = +positiveNumber * 12;
}

alert(`${positiveNumber} by 12 equal ${total}`);

// exercise 4

for (let index = 1; index < 51; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}
