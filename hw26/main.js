"use strict";

// завдання 1

let car = {
  type: "electric",
  wheels: 4,
};

let sportCar = {
  doors: 2,
};

Object.setPrototypeOf(sportCar, car);

let passengerCar = Object.create(car);
passengerCar.doors = 4;

let toyCar = Object.create(sportCar);
toyCar.type = "toy";

console.log(car);
console.log(sportCar);
console.log(passengerCar);
console.log(toyCar);

// завдання 2

let employees = {
  wallet: {},
  pay(month, sum) {
    this.wallet[month] = sum;
  },
};

let frontendDeveloper = {
  name: "Mike",
  wallet: {},
};
Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
  name: "Bob",
  wallet: {},
};
Object.setPrototypeOf(backendDeveloper, employees);

backendDeveloper.pay("june", 1500);

console.log(frontendDeveloper.wallet.june);
console.log(backendDeveloper.wallet.june);

// завдання 3

function User(name, age) {
  this.name = name;
  this.age = age;
}

let user_1 = new User("Mike", 18);
let user_2 = new user_1.constructor("Bob", 25);

/* Таке питання:
Чи обидва варіанта створення user_2 є нормальними?
В консолі отримую однакові об'єкти. Та, можливо, тут щось не коректно?
І з завдання не зрозуміло як саме використати (має бути прототипом чи щось ще).
Здається мені не вистачає практичного розуміння цієї теми.

let user_2 = Object.create(user_1);
user_2.name = "Bob";
user_2.age = 25;
*/

console.log(user_1);
console.log(user_2);

// завдання 4

function UsreType(name) {
  for (let i = 0; i < name.length; i++) {
    this[i] = name[i];
    if (i + 1 == name.length) {
      Object.defineProperty(this, "length", {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  }
  Object.defineProperty(this, "join", {
    enumerable: true,
    writable: false,
    configurable: false,
    value: Array.prototype.join,
  });
  // this.join = Array.prototype.join;
}

let admins = new UsreType(["Mike", "Bob", "Nikola"]);

console.log(admins.join("; "));
