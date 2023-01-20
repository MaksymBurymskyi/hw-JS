"use strict";

// #1

let a = +prompt("Enter a first number");
if (!a) {
  a = +prompt("The number you entered is not a number! Enter any number");
}
let b = +prompt("Enter a second number");
if (!b) {
  b = +prompt("The number you entered is not a number! Enter any number");
}

alert(maxNuber(a, b));

function maxNuber(a, b) {
  if (a === b) {
    return "a = b";
  } else if (a > b) {
    return a;
  } else if (!a & !b) {
    return "its none";
  } else {
    return b;
  }
}

// #2

let number = +prompt("Enter a number", "0");

function revers(number) {
  return -number;
}

alert(revers(number));

// #3

let addsNumberThree = (randomNumber, count) => {
  let result = randomNumber;
  for (let index = 0; index < count; index++) {
    result = result + 3;
  }

  return result;
};

let randomNumber = prompt("Enter a number", "1");
let count = prompt("Enter a number", "0");

alert(addsNumberThree(+randomNumber, +count));

// #4

function getMetric(metric, km, m, cm) {
  if (metric == "m") {
    return m(km);
  } else {
    return cm(km);
  }
}

let distance = prompt("Enter the distance in kilometers", "1");
let metric = prompt('Enter the units: "m" or "cm"');

let kmToM = (distance) => {
  return distance * 1000;
};

let kmToCm = (distance) => {
  return distance * 100000;
};

alert(getMetric(metric, distance, kmToM, kmToCm));
