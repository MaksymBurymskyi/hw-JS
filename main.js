"use strict";

// --- завдання 1 ---
let car = {
  model: "ZAZ-968m",
  year: 1986,
  color: "green",
};

car.color = "yellow";
car.type = "electric";
car.signal = function () {
  console.log("fa! fa!");
};

console.log(car);

// --- завдання 2 ---

let salaries = {
  frontend: 12000,
  backend: 10000,
  designer: 8000,
  dayPay() {
    "Схоже цей метод тут знаходиться щоб заважати))";
    // Ні, якраз він тут для того, щоб у total ви перевірили, чи не ф-ія на даній ітерації
  },
  total() {
    let sum = 0;
    for (const key in this) {
      // Можна трошки коротше ту перевірку зробити
      if (typeof this[key] === "number") {
        sum += this[key];
      }
    }
    console.log(sum);
  },
};

salaries.total();

salaries.manager = 5000;

salaries.total();

delete salaries.designer;

salaries.total();

// --- завдання 3 ---

function CreateDescrCard(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
}

let dell = new CreateDescrCard("dell", "windows", 800);
let apple = new CreateDescrCard("apple", "MAC OS", 1700);

console.log(dell);
console.log(apple);

// --- завдання 4 ---

function CreateDescriptionCard(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case "string":
        return this.brand;

      case "number":
        return this.cost;

      default:
        return `${this.brand} ${this.system} ${this.cost} // `;
    }
  };
}

let asus = new CreateDescriptionCard("asus", "android", 200);
let iphone = new CreateDescriptionCard("iphone", "iOS", 500);

console.log(asus);
console.log(iphone);
console.log(String(asus));
console.log(+iphone);
console.log(asus + iphone);

// --- додаткове завдання ---
// ----- №1

let sortNumbers = (firstNum, secondNum) => {
  // Зайві дужки і завжди порівнюєте за допомогою суворого порівнянн (===)
  if (firstNum % 2 === 0 && secondNum % 2 === 0) {
    return firstNum * secondNum;
  } else if ((firstNum + secondNum) % 2 == 0) {
    // Тут класно придумали, але виглядає трошки заплутано. Краще винести перевірки firstNum % 2 == 0 та secondNum % 2 == 0 в окремі змінні і перевикористовувати їх
    return firstNum + secondNum;
  } else {
    return firstNum % 2 > secondNum % 2 ? firstNum : secondNum;
  }
};

console.log(sortNumbers(4, 6)); // *
console.log(sortNumbers(3, 7)); // +
console.log(sortNumbers(2, 3)); // odd

// ----- №2

const tasks = {
  Anna: {
    status: "new",
    text: "Create checkout page",
  },
  Ihor: {
    status: "done",
    text: "Add styles to header",
  },
  addsNewTask(name = prompt("Enter the name of the doer", "User"), task) {
    if (!name || !isNaN(name)) {
      return alert(
        "Your task won't be create. You should enter the name of the doer."
      );
    } else if (name.length > 1) {
      // Тут прямо дуууже заплутано вийшло. Намагайтеся писати код якомога простіше 
      // Ось тут можете почитати про деякі принципи https://tproger.ru/articles/5-principov-chitaemogo-koda-kiss-yagni-dry-bduf-i-britva-okkama/. 
      // Нажаль не знайшла нормальну статтю українською, пізніше додам в Notion
      // А ось тут можете почитати про варіанти, як шукати по ключу в обʼєкті https://www.freecodecamp.org/news/how-to-check-if-an-object-has-a-key-in-javascript/
      // В результаті виглядати має якось так:
      if(this[name]?.status == "new") {
        return alert(`Current task for ${name} isn't complete yet`);
      }
      task = prompt("Enter your task", "new task");
    } else {
      return alert("Your task won't be create. The name is too short.");
    }
    if (!task) {
      return alert("Your task won't be create. You should enter your task.");
    }
    if (task.length > 2) {
      this[name] = {
        status: "new",
        text: task,
      };
    } else {
      return alert("Your task won't be create");
    }

    alert(`Created a new task for ${name}
    status: ${"new"},
    text: ${task}`);
  },
};

console.log(tasks.addsNewTask());
console.log(tasks);