"use strict";

// завдання 1

class Cola {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}

class Whiskey {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}

class Ice {
  constructor(price) {
    this.price = price;
  }
}

const addingTax = {
  getPrice() {
    return this.price;
  },
  VAT() {
    return "wrong option";
  },
  exciseDuty() {
    return "wrong option";
  },
  singleTax() {
    return "wrong option";
  },
};

Object.assign(Cola.prototype, addingTax);
Cola.prototype.VAT = function () {
  return (this.price = this.price * 1.2);
};
Object.assign(Whiskey.prototype, addingTax);
Whiskey.prototype.exciseDuty = function () {
  return (this.price = this.price * 1.3 + 10);
};
Object.assign(Ice.prototype, addingTax);
Ice.prototype.singleTax = function () {
  return (this.price = this.price + 1);
};

let cocaCola = new Cola("Coca-Cola", 10);
let johnWalker = new Whiskey("John Walker", 100);
let ice = new Ice(2);

console.log(cocaCola.VAT());
console.log(johnWalker.VAT());
console.log(johnWalker.exciseDuty());
("");
console.log(ice.singleTax());

// завдання 2

function uniqueString(row) {
  const arr = row.split(";");
  const set = new Set(arr);
  return set;
}

console.log(uniqueString("cherry;orange;cherry;banana;banana"));

// завдання 3

const shopListTag = document.querySelector(".shop-list");
const showUniqueNamesBtn = document.createElement("button");
const phoneNameList = document.createElement("ul");

function returnShopList() {
  const shopList = [];

  for (let index = 0; index < shopListTag.children.length; index++) {
    shopList.push(shopListTag.children[index].textContent);
  }

  return shopList;
}

function returnUniquePhoneNames(arr) {
  const arrNames = new Set(arr);
  console.log(arrNames);

  showUniqueNamesBtn.innerText = "Show phone models";
  shopListTag.parentElement.insertBefore(
    showUniqueNamesBtn,
    document.querySelector("script")
  );
  return [...arrNames];
}

const uniquePhoneNames = returnUniquePhoneNames(returnShopList());

showUniqueNamesBtn.addEventListener("click", showUniqueNames);

function showUniqueNames(event) {
  event.preventDefault();
  showUniqueNamesBtn.parentElement.insertBefore(
    phoneNameList,
    document.querySelector("script")
  );
  phoneNameList.innerHTML = "";

  for (let index = 0; index < uniquePhoneNames.length; index++) {
    const currLi = document.createElement("li");
    currLi.innerText = uniquePhoneNames[index];
    phoneNameList.appendChild(currLi);
  }
}

// завдання 4

const mike = { name: "Mike", age: 18 };
const bob = { name: "Bob", age: 25 };
const nikola = { name: "Nikola", age: 32 };

const userVisits = new Map();

function siteVisitsCount(user) {
  if (!userVisits.get(user)) {
    userVisits.set(user, 0);
  }
  return function () {
    let counter = userVisits.get(user);
    counter++;
    userVisits.set(user, counter);

    return counter;
  };
}

const mikeVisit = siteVisitsCount(mike);
const bobVisit = siteVisitsCount(bob);
const nikolaVisit = siteVisitsCount(nikola);

mikeVisit();
mikeVisit();
mikeVisit();
bobVisit();
bobVisit();

console.log(userVisits.get(mike));
console.log(userVisits.get(bob));
console.log(userVisits.get(nikola));
