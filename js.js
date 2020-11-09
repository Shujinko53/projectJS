'use strict';

// function showFirstMessage(text) {
//   alert(text);
// }

// showFirstMessage('Hello Everybody!!!:)');

/*------------------------------------------*/

// function learnJS(lang, callback) {
//   console.log("I learn " + lang);
//   callback();
// }

// learnJS("Javascript", done);

// function done() {
//   console.log("I've done the third lesson");
// }

/*------------------------------------------*/

// let options = {
//   width: 1024,
//   height: 1024,
//   name: "test"
// };

// console.log(options.name);

// options.bool = true;
// console.log(options.bool);
// options.colors = {
//   border: "#000000",
//   bg: "blu"
// }

// delete options.bool;

// console.log(options);

// for (let key in options) {
//   console.log('Свойство ' + key + " имеет значение " + options[key]);
// }

// let arr = ["first", 2, 3, "four", 5];

// // arr.pop();
// // arr.push("5");
// // arr.shift();
// // arr.unshift("1");

// arr.forEach(function(item, i, mass) {
//   console.log(i + ": " + item + " (массив: " + mass + ")");
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass) {
//   console.log(key);
// }

// let answer = prompt("", ""),
//     arr = [];

// arr = answer.split(',');
// console.log(arr);

// console.log([] + false); // "false"

/*

//i - С этим флагом поиск не зависит от регистра: нет разницы между A и a
//g - С этим флагом поиск ищет все совпадения, без него – только первое.
//m - Многострочный режим

Метод str.match(regexp) ищет совпадения: все, если есть флаг g, иначе только первое.
Метод str.replace(regexp, replacement) заменяет совпадения с regexp на replacement: 
    все, если у регулярного выражения есть флаг g, иначе только первое.
Метод regexp.test(str) возвращает true, если есть хоть одно совпадение, иначе false.

Существуют следующие символьные классы:

\d – цифры   \D – не цифры.
\s – пробельные символы, табы, новые строки   \S – все, кроме \s.
\w – латиница, цифры, подчёркивание '_'   \W – все, кроме \w.
. – любой символ, если с флагом регулярного выражения s, в противном случае 
    любой символ, кроме перевода строки \n.

*/

// let age = document.getElementById('age');

// function showUser(surname, name) {
//     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// showUser.apply(age, ['Smith', 'John']);

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// };


// let ivan = new User('Ivan', 25);

// console.log(ivan.hello);
