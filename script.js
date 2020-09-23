'use strict';

// let money =  prompt("Ваш бюджет на месяц?"),
//     time = prompt("Введите количество дней для затрат");

// let appData = {
//   budget: money,
//   timeData: time,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   savings: false
// };

// let answerOne = ("Введите обязательную статью расходов в этом месяце", ''),
//   answerTwo = ("Во сколько обойдется?", ''),
//   answerTree = ("Введите обязательную статью расходов в этом месяце", ''),
//   answerFour = ("Во сколько обойдется?", '');

// appData.expenses.answerOne = answerTwo;
// appData.expenses.answerTree = answerFour;

// alert(appData.budget / appData.timeData);

let num = 50;

if (num < 49) {
  console.log('Wrong!');
} else if (num > 100) {
  console.log('Too more!');
} else {
  console.log('Correct!');
}

(num == 50) ? console.log('Correct!') : console.log('Wrong!');

switch (num) {
  case num < 49:
    console.log('Wrong!');
    break;
  case num > 100:
    console.log('Thats more!');
    break;
  case num > 80:
    console.log('Too more!');
    break;
  case 50:
    console.log('Correct!');
    break;
  default:
    console.log('Something going wrong');
    break;
}