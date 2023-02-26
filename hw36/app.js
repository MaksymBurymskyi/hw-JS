"use strict";

// завдання 1

const mainTitle = document.createElement("h1");
const firstTaskContainer = document.createElement("div");
const firstTaskTitle = document.createElement("h2");
const firstTaskAnswer = document.createElement("div");

mainTitle.innerText = "JSON, API, Cookies";
firstTaskTitle.innerText = "Завдання 1";

document.body.prepend(firstTaskContainer);
document.body.prepend(mainTitle);
firstTaskContainer.prepend(firstTaskTitle);

async function loadData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    firstTaskAnswer.innerHTML = JSON.stringify(data);
    firstTaskContainer.append(firstTaskAnswer);

    return data;
  } catch (error) {
    console.log("Йой, помилка!", error);
  }
}

let urlAddress = "home-work-data.json";

function showAdminName(data) {
  data
    .then((result) => {
      for (const key in result) {
        if (result[key].isAdmin) {
          const adminName = document.createElement("div");
          adminName.innerText = `Administrator's name is ${result[key].name}`;
          firstTaskContainer.append(adminName);
          // console.log(result[key].name);
        }
      }
    })
    .catch((err) => {
      console.log("Щось пішло не так", err);
    });
}

showAdminName(loadData(urlAddress));

// завдання 2

let nikola = { firstName: "Nikola", lastName: "Tesla" };
let bob = { firstName: "Bob" };
let mike = { lastName: "Smith" };
let michael = {};

let getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`;
};

getFullName = new Proxy(getFullName, {
  apply(target, _thisArg, args) {
    const obj = args[0];
    if (!obj.firstName && !obj.lastName) {
      return "no name";
    }

    switch (undefined) {
      case obj.firstName:
        return obj.lastName;
      case obj.lastName:
        return obj.firstName;

      default:
        return target(...args).toUpperCase();
    }
  },
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));

// завдання 3

let users = [
  { name: "Nikola", age: 18, id: 1 },
  { name: "Bob", age: 26, id: 2 },
  { name: "Mike", age: 32, id: 3 },
];

function setToLocalStorage(array) {
  array.forEach((element) => {
    localStorage.setItem(element.name, JSON.stringify(element));
  });
}
const thirdTaskContainer = document.createElement("div");
const thirdTaskTitle = document.createElement("h2");
thirdTaskTitle.innerText = "Завдання 3";

function sayHelloToUser(id) {
  for (let index = 0; index < localStorage.length; index++) {
    const valItem = localStorage.getItem(localStorage.key(index));
    try {
      const obj = JSON.parse(valItem);
      const valueId = id;
      if (valueId === obj.id) {
        console.log(`Hello, ${obj.name}!`);
        const thirdTaskAnswer = document.createElement("div");
        thirdTaskAnswer.innerHTML = `Hello, ${obj.name}!`;
        thirdTaskContainer.prepend(thirdTaskTitle);
        thirdTaskContainer.append(thirdTaskAnswer);
        firstTaskContainer.parentElement.insertBefore(
          thirdTaskContainer,
          firstTaskContainer.nextElementSibling
        );
      }
    } catch (error) {
      console.log("Не валідний JSON-рядок:", error);
      continue;
    }
  }
}

setToLocalStorage(users);
sayHelloToUser(3);

// завдання 4

const valueInp = document.getElementById("text");

valueInp.addEventListener("blur", () =>
  localStorage.setItem("valueInp", valueInp.value)
);

window.addEventListener("pageshow", () => {
  valueInp.value = localStorage.getItem("valueInp");
});
