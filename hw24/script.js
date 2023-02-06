"use strict";

// завдання 1

class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }

  //завдання 2
  getName(isAdmin) {
    if (isAdmin === true) {
      return this.#name ? this.#name : this.login;
    } else {
      return "Denied";
    }
  }

  //завдання 3
  changeName(newName, password) {
    if (+password === 123) {
      console.log(`Name Changed from ${this.#name} to ${newName}`);
      this.#name = newName;
    } else {
      console.log("Permission denied");
    }
  }
}

let user1 = new User("Mike", "MK_18", 18);
let user2 = new User("", "NRG", 22);

//виклики перевірки завдання 1
/*
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);
*/

//виклики перевірки завдання 2
/*
console.log(user1.getName(true));
console.log(user1.getName(false));
console.log(user2.getName(true));
console.log(user2.getName(false));
*/

//виклики перевірки завдання 3
/*
user1.changeName("Dean", 321);
user1.changeName("Dean", 123);
console.log(user1.getName(true));
user2.changeName("Alex", "122");
user2.changeName("Alex", "123");
*/

// завдання 4

class Admin extends User {
  #name;
  #isAdmine;
  constructor(name, login, age) {
    super(name, login, age);
    this.#isAdmine = true;
  }
  getUserName(User) {
    console.log(User.getName(this.#isAdmine));
  }
}

let admin1 = new Admin("Ortis", "oOo", 28);

admin1.getUserName(user1);
admin1.getUserName(user2);

// завдання 5

class Follower {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }
  getPhone(isAdmin) {
    // const hidePhone =
    //   this.#phone.slice(0, 4) +
    //   "******" +
    //   this.#phone.slice(10, this.#phone.length);

    // посилення задачі):
    const hidesPhone = () => {
      let phoneNumber = this.#phone.split("");
      for (let index = 0; index < phoneNumber.length; index++) {
        if (index > 3 && index < 10) phoneNumber[index] = "*";
      }
      phoneNumber = phoneNumber.join("");
      return phoneNumber;
    };
    //
    isAdmin === true ? console.log(this.#phone) : console.log(hidesPhone());
  }
}

let follower1 = new Follower("Goga", "067-067-67-67");
let follower2 = new Follower("Tom", "099-888-88-99");

follower1.getPhone(true);
follower1.getPhone("fd");
follower2.getPhone(true);
follower2.getPhone(false);
