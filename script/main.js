"use strict";

// task #1 - вивести інформацію у консоль

console.log("You can ignore single and double quotes like this: \\\'\\\' \\\" \\\"");

// завдання #2 - спливаючі вікна

setTimeout(function () {
    let name = "name",
        secondName = 'surname',
        age,
        isAdmin;
    
    alert('Please, enter Your data.')
    
    name = prompt("Enter your name", "name");
    while (name == "name") {
        alert(`You have not entered any value. Please try again`);
        name = prompt("Enter your name", "name");
        if (name == null) {
            alert(`You are boring. Enter your name`);
            name = prompt("Enter your name", "name");
        };
    };
    alert(`Your name is: ${name}.`);

    secondName = prompt("Enter your surname", "surname");
    while (secondName == "surname") {
        alert(`You have not entered any value. Please try again`);
        secondName = prompt("Enter your surname", "surname");
        if (secondName == null) {
            alert(`You are boring. Enter your surname`);
            secondName = prompt("Enter your surname", "surname");
        };
    };
    alert(`Your full name is: ${name} ${secondName}.`);

    age = prompt("How old are you?", "age");
    while (isNaN(age)) {
        alert(`You have not entered any numbers. Please try again`);
        age = prompt("How old are you?", "age");
        if (age == null) {
            alert(`You are boring. Enter your age`);
            age = prompt("How old are you?", "age");
        };
        while (age <= 3) {
            alert(`You are older than ${age}. How old are you?`);
            age = prompt("How old are you?", "age");
        };
    };
    alert(`Your full name is: ${name} ${secondName}. Your age is: ${age}.`);

    isAdmin = confirm("Are you admine?");
    if (isAdmin) {
        alert(`Your full name is: ${name} ${secondName}. Your age is: ${age}. Admin status: ${isAdmin}`);
        isAdmin = 'You are an admin.';
    } else {
        alert(`Your full name is: ${name} ${secondName}. Your age is: ${age}. Admin status: ${isAdmin}`);
        isAdmin = 'You are not an admin.';
    }
    
    const result = `You are ${name.toUpperCase()} ${secondName.toUpperCase()}, You have ${age} years old. ${isAdmin}`;
    document.querySelector('.secondTask').innerHTML = result;
}, 5500);

// завдання #3:

// - console.log(Boolean(alert('5')));//повртає у консоль - false - бо функція alert дає undefined, яке э завжи false;
// - console.log(true > false);//повртає у консоль - true - тому, що для виконання порівняння виконується конвертація. true = 1,  false = 0. Одиниця більше ніж ноль;
// - console.log(true > 5);//повртає у консоль - false - тому, що для виконання порівняння виконується конвертація. true = 1;
// - console.log(true < '5');//повртає у консоль - true - тому, що для виконання порівняння виконується конвертація. true = 1. Рядок "5" стає числом 5;
// - console.log(true > null);//повртає у консоль - true - тому, що null це нічого, тобто 0. true = 1, що більше ніж 0;