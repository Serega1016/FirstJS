"use strict";

// let number = 5;

// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//   a: 50,
// };

// obj.a = 10;
// console.log(obj);

// console.log(name);

// var name = "Serg";

// {
//   var result = 50;
// }
// console.log(result);

// const a = 5000;
// const b = 4000;

// console.log();

// let number = 4.5;

// console.log(-4 / 0);
// console.log("string" * 9);

// const persone = "alex";

// const bool = false;

// console.log(some);
// let und;
// console.log(und);

// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false,
// };
// console.log(obj.age);
// console.log(obj["name"]);

// let arr = ["plum.jpg", "orange.png", 6, "apple.bmp"];
// console.log(arr[1]);

// const arr = ["a", "b", "c"];
// console.log(arr[1]);

// const arrobj = {
//   0: "a",
//   1: "b",
//   2: "c",
// };
// arrobj.b = "1234";
// console.log(arrobj["b"]);
// console.log(arrobj.b);

// const b = "b";

// // const obj = { a: 1, b: 2 };

// const obj = {
//   Anna: 500,
//   Alice: 800,
// };

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18?", "");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your last name?", "");
// answers[2] = prompt("How old are you?", "");

// console.log(typeof answers);

// Интерполяция

// const category = "toys";

// console.log(`https://someurl./${category}/5`);

// const user = "Serg";

// alert(`Hallo, ${user}`);

// Операторы

// console.log(4 + "5");
// console.log(4 + +"5");

// let incr = 10,
//   decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// let incr = 10,
//   decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// let incr = 10,
//   decr = 10;

// постфикс
// // ++incr;
// // --decr;

// префикс
// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 * 4 === "8");

// const isChecked = true,
//   isClose = false;

// console.log(isChecked && isClose);

// const isChecked = true,
//   isClose = false;

// console.log(isChecked || isClose);

//  Задание на урок:
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }
// Проверить, чтобы все работало без ошибок в консоли

// const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?", ""),
//   d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Условия

// if (4 == 9) {
//   console.log("ok");
// } else {
//   console.log("error");
// }

// const num = 50;
// // бинарный
// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("much");
// } else {
//   console.log("ok");
// }

// // тернарный
// const num = 51;
// num === 50 ? console.log("ok") : console.log("error");
// // унарный
// +

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("not");
//     break;
//   case 100:
//     console.log("not");
//     break;
//   case 51:
//     console.log("yes");
//     break;
//   default:
//     console.log("not now");
//     break;
// }

// логические операторы

// const hamburger = 5;
// const fries = 0;

// // && --и

// if (hamburger && fries) {
//   console.log("I am sat");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "sdgafbr");

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("All am sat");
// } else {
//   console.log("we are going");
// }

// ||  Или

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("All are sat");
// } else {
//   console.log("we are going");
// }

// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// let johnReport,
//   alexReport,
//   samReport,
//   mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport);
// console.log(!0);

// Упражнения
// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);
// console.log((!1 && 2) || !3);
// console.log(25 || (null && !3));
// console.log(25 || (null && !3));
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || (null && !3 && undefined) || 5);
// console.log((5 === 5 && 3 > 1) || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// } else {
//   console.log("we are going");
// }

// Циклы
// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

let num = 50;

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }
