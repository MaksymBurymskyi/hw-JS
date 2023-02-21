"use strict";

// завдання 1

function getData(url) {
  let result = fetch(url);
  result
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    })
    .then((data) => {
      const filteredData = data.filter((item) => item.title[0] === "a");
      console.log("Filtered data: ", filteredData);
    })
    .catch((error) => console.log(error.message));
}

const url = "https://jsonplaceholder.typicode.com/todos";

getData(url);

// завдання 2

async function getAsincData(url) {
  try {
    let result = await fetch(url);
    if (result.ok) {
      let response = await result.json();
      const filteredData = response.filter((item) => item.title[0] === "a");
      console.log("Data: ", filteredData);

      return filteredData;
    } else {
      throw new Error(`Error: ${result.status}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

getAsincData(url);

// завдання 3

const userA = document.querySelector(".user-a");
const userAb = document.querySelector(".user-ab");

function writeToBlock(promise) {
  const list = document.createElement("ul");
  list.classList.add("user-list-A");

  promise.then((data) => {
    data.forEach((element) => {
      const currEl = document.createElement("li");
      currEl.innerHTML = JSON.stringify(element);
      list.appendChild(currEl);
    });
  });

  return list;
}

function writeToBlockWithFilter(promise) {
  const list = document.createElement("ul");
  list.classList.add("user-list-Ab");

  promise.then((data) => {
    data.forEach((element) => {
      if (element.title[1] == "b") {
        const currEl = document.createElement("li");
        currEl.innerHTML = JSON.stringify(element);
        list.appendChild(currEl);
      }
    });
  });

  return list;
}

// userA.appendChild(writeToBlock(getAsincData(url)));
// userAb.appendChild(writeToBlockWithFilter(getAsincData(url)));

// завдання 4

const btnAddA = document.querySelector(".add-a");
const btnAddAb = document.querySelector(".add-ab");
const btnAddAll = document.querySelector(".add-all");

btnAddA.addEventListener("click", () => {
  userA.innerHTML = "";
  userAb.innerHTML = "";
  userA.appendChild(writeToBlock(getAsincData(url)));
});

btnAddAb.addEventListener("click", () => {
  userA.innerHTML = "";
  userAb.innerHTML = "";
  userAb.appendChild(writeToBlockWithFilter(getAsincData(url)));
});

btnAddAll.addEventListener("click", () => {
  userA.innerHTML = "";
  userAb.innerHTML = "";
  userA.appendChild(writeToBlock(getAsincData(url)));
  userAb.appendChild(writeToBlockWithFilter(getAsincData(url)));
});
