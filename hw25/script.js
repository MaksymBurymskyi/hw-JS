"use strict";

// завдання 1

let user = new Object();

Object.defineProperties(user, {
  name: {
    value: "Mike",
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 32,
    enumerable: true,
    configurable: true,
  },
  id: {
    value: "Mike_id",
    enumerable: true,
  },
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
console.log(Object.getOwnPropertyDescriptor(user, "age"));
console.log(Object.getOwnPropertyDescriptor(user, "id"));

// завдання 2

let dataBase = {
  dbName: "User",
  dbType: "MySQL",
};

let comfigurateDB = {
  token: "123",
  password: "567",
  user: "admin",
};

Object.freeze(dataBase);
Object.seal(comfigurateDB);

// завдання 3

let salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries, "sum", {
  get() {
    let sum = 0;
    for (salary in this) {
      sum += this[salary];
    }
    console.log(sum);
  },
  set(value) {
    value.forEach((element) => {
      let arrItem = element.split(": ");
      this[arrItem[0]] = +arrItem[1];
    });
  },
  enumerable: false,
});

salaries.sum = [
  "frontend: 2500",
  "backend: 1750",
  "design: 1300",
  "manager: 800",
];
salaries.sum;
console.log(salaries);

// завдання 4

let user1 = {
  name: "Mike",
  surname: "Davis",
  age: 25,
};
Object.defineProperty(user1, "userInfo", {
  get() {
    /*Цикл - це перше, що спадає на думку.
    Далі придумав ще. Але, здається, перше - краще.
    for (const key in this) {
      console.log(`${key}: ${this[key]},`);
    }*/
    let props = Object.entries(this).reduce((str, [key, val]) => {
      return `${str}${key}: ${val}, `;
    }, "");
    console.log(props);
  },
});
user1.userInfo;
user1.login = "MD-25";
user1.userInfo;
