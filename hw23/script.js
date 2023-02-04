// завдання 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.reduce(function (a, b) {
//   return a + b;
// });

// const sum = arr.reduce((a, b) => a + b);
// console.log(sum);

const calculateSum = (arr) => {
  return arr.length > 1 ? arr.pop() + calculateSum(arr) : arr[arr.length - 1];
};

// function calculateSum(arr) {
//   if (arr.length > 1) {
//     return arr.pop() + calculateSum(arr);
//   } else {
//     return arr[arr.length - 1];
//   }
// }

console.log(calculateSum(arr));

// PS: Закоментовані варіанти лишив собі на шпаргалку

// завдання 2

const deepCount = (arr) => {
  let count = 0;
  function checkArr(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        count++;
        checkArr(element);
      } else {
        count++;
      }
    });
  }
  checkArr(arr);
  return count;
};

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([[[[]]]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));

// завдання 3

const employees = {
  development: {
    backend: [
      { name: "Mike", salary: 2000 },
      { name: "Nikola", salary: 2500 },
    ],
    frontend: [
      { name: "Artem", salary: 3000 },
      { name: "Alex", salary: 2700 },
    ],
  },
  sales: {
    marketing: {
      internet_marketers: [
        { name: "Nina", salary: 1000 },
        { name: "Olena", salary: 1300 },
      ],
      promotion: [
        { name: "Oleg", salary: 1400 },
        { name: "Masha", salary: 1700 },
      ],
    },
    sellers: [
      { name: "Max", salary: 900 },
      { name: "Donald", salary: 700 },
      { name: "Joe", salary: 1100 },
    ],
  },
  designer: [{ name: "Kate", salary: 1800 }],
};

function sumSalary() {
  let sum = 0;
  return function selectSalary(obj) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((employee) => (sum += employee.salary));
      } else {
        selectSalary(obj[key]);
      }
    }
    return sum;
  };
}

const totalSalary = sumSalary();

console.log(totalSalary(employees));

// завдання 4

let arr1 = [2, 16, 7, 3],
  arr2 = [9, 3, 17, 12, 4, 8],
  arr3 = [6, 11, 16, 15, 11];

console.log(Math.max(...arr1, ...arr2, ...arr3));
