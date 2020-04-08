" use strict ";
let money;
let time;
money = prompt("Ваш бюджет на месяц?","56000");
time = prompt("Введите дату в формате YYYY-MM-DD","2020.05.15");



let appData = {
    budget: money,
    timeData: time,
    expenses: {
        question1: "question2"
    },
    optionalExpenses: {

    },
    income: [],
    saving: "false"

};

let question1 = prompt("Введите обязательную статью расходов в этом месяце","35000");
let question2 = prompt("Во сколько обойдется","40000");

appData.expenses[question1] = question2; 
alert(appData.budget / 30);
console.log(appData);


