"use strict";

function validateEmail(email) {
  if (typeof email !== "string") {
    return false;
  }

  let checkEmail = email.split(".");

  if (email === "") {
    return false;
  } else if (email.length < 7) {
    //зробив мінімум 7. Та, мабуть, і це мало. Перевіряти за довжиною 5 немає сенсу, воно відсівається за іншими критеріями нижче.
    return false;
  } else if (email.indexOf("@") < 2) {
    return false;
  } else if (email.includes(".") < 1) {
    return false;
  } else if (email.includes(".@") || email.includes("@.")) {
    return false;
  } else if (email.split("@").length > 2) {
    return false;
  } else if (checkEmail[checkEmail.length - 1].includes("@")) {
    return false;
  } else return true;
}

console.log(validateEmail("em@g.m")); //false
console.log(validateEmail("e@mailgmail.com")); //false
console.log(validateEmail("email@g@mail.com")); //false
console.log(validateEmail("email@.gmail.com")); //false
console.log(validateEmail("email.@gmail.com")); //false
console.log(validateEmail("e.mail@gmailcom")); //false
console.log(validateEmail("email.gmail.c@m")); //false
console.log(validateEmail("e.mail@gmail.com")); //true
console.log(validateEmail("email@gmail.com")); //true
