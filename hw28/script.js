"use strict";

// завдання 1

function count(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }
  let values = getValues(expression);
  switch (values[1]) {
    case "+":
      return showResult(sum(values));
    case "-":
      return showResult(subtract(values));
    case "*":
      return showResult(multiply(values));
    case "/":
      return showResult(divide(values));
  }
  function showResult(value) {
    return value;
  }
}

function sum(values) {
  return +values[0] + +values[2];
}
function subtract(values) {
  return values[0] - values[2];
}
function multiply(values) {
  return values[0] * values[2];
}
function divide(values) {
  //завдання 2
  try {
    if (+values[2] === 0) {
      throw new SyntaxError("Error: Division by 0 is infinity");
    }
    return values[0] / values[2];
  } catch (error) {
    console.log(error.message);
    return 0;
  }
}

// console.log(count("5+2"));
// console.log(count("5-2"));
// console.log(count("5*2"));
// console.log(count("5/2"));

// завдання 2

// console.log(count("5/0"));

// завдання 3

function count1(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }
  let values;
  try {
    let data = Values(expression);
    values = data;
  } catch (error) {
    console.log(error.name + ": " + error.message);
    data = [0, "+", 0];
  }
  switch (values[1]) {
    case "+":
      return showResult(sum(values));
    case "-":
      return showResult(subtract(values));
    case "*":
      return showResult(multiply(values));
    case "/":
      return showResult(divide(values));
  }
  function showResult(value) {
    return value;
  }
}

// console.log(count1("5/2"));

// завдання 4

function MakeUsers(name, age) {
  this.name = name;
  this.age = age;
}
const user = new MakeUsers("Mike"); //Forgot to pass the second parameter
function showMovie(user) {
  try {
    if (isNaN(+user.age) || !user.age) {
      throw new Error();
    }
    if (user.age >= 18) {
      console.log("You can watch this movie");
    } else {
      console.log("Sorry, you are too young");
    }
  } catch (error) {
    user.age = prompt("Введіть свій вік для оцінки можливості перегляду");
    showMovie(user);
  }
}
showMovie(user);
