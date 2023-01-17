"use stict";

let firstSalary;
let secondSalary;
let twoMonthSalary;
let totalSalary;

firstSalary = prompt("Enter your first month salary");
while (isNaN(firstSalary) || firstSalary == null || firstSalary <= 0) {
  alert("Oh, try again");
  firstSalary = prompt("Enter your first month salary");
}
firstSalary = +firstSalary;

secondSalary = prompt("Enter second month salary");
while (isNaN(secondSalary) || secondSalary == null || secondSalary <= 0) {
  alert("Oh, try again");
  secondSalary = prompt("Enter second month salary");
}
secondSalary = +secondSalary;

twoMonthSalary = firstSalary + secondSalary;
totalSalary = twoMonthSalary + 1;

alert(`Your salary for two monts is: ${twoMonthSalary}$`);
alert(
  `You have extra bomus! Your total salary was: ${twoMonthSalary}$ it\`s increase for 1$ and now it is: ${totalSalary}$`
);

if (totalSalary < 2000) {
  alert("I`m out");
} else {
  alert("I`m ready to work");
}
