"use strict";

// --- завдання 1 ---

let names = ["Mike", "Nikola", "Tom"];

console.log(names[2]);

names[1] = "Alex";
console.log(names);

names.splice(names.length - 2, 2);
console.log(names);

// --- завдання 2 ---

let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

function comparesArrays(a, b) {
  let sumA = a.reduce(function (sum, curr) {
    // return sum + curr;
    return sum + Math.abs(curr);
  });
  let sumB = b.reduce(function (sum, curr) {
    // return sum + curr;
    return sum + Math.abs(curr);
  });
  if (sumA > sumB) {
    console.log("a > b");
  } else if (sumA < sumB) {
    console.log("a < b");
  } else {
    console.log("a == b");
  }
}

comparesArrays(a, b);

// --- завдання 3 ---

let phrase = "I am learning JavaScript right now";
let arrFromPhrase = phrase.split(" ");

console.log(arrFromPhrase);

// --- завдання 4 ---

let first = [5, 3, 8, 5, 3, 2, 1, 2];
let second = [];

first.forEach((element) => {
  if (!second.includes(element)) second.push(element);
});
console.log(second);

// --- завдання 5 ---

let users = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
];

function selectionAge(users) {
  users.forEach((obj) => {
    switch (obj.age) {
      case 19:
      case 20:
        console.log(obj.id);
    }
  });
}

selectionAge(users);
