'use strict';

let money =  prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите количество дней для затрат");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let answerOne = ("Введите обязательную статью расходов в этом месяце", ''),
  answerTwo = ("Во сколько обойдется?", ''),
  answerTree = ("Введите обязательную статью расходов в этом месяце", ''),
  answerFour = ("Во сколько обойдется?", '');

appData.expenses.answerOne = answerTwo;
appData.expenses.answerTree = answerFour;

alert(appData.budget / appData.timeData);
