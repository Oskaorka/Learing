" use strict ";
let money;
let time;
money = +prompt("Ваш бюджет на месяц?","56000");
time = prompt("Введите дату в формате YYYY-MM-DD","2020.05.15");



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {

    },
    income: [],
    saving: "false"

};


for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце","35000");
    let b = prompt("Во сколько обойдется","40000");

    if( (typeof(a))=== "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != "" && b !="" && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("Bad result");
        i--;
    }

    
}

/*Cycle WHile 

let i = 0;
while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце","35000");
    let b = prompt("Во сколько обойдется","40000");
    if( (typeof(a))=== "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != "" && b !="" && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
} else {
    console.log("Bad result");
    i--;
}

    i++;

}*/

/*Cycle do.....while 

let i = 0;
do {
let a = prompt("Введите обязательную статью расходов в этом месяце","35000");
    let b = prompt("Во сколько обойдется","40000");
    if( (typeof(a))=== "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != "" && b !="" && a.length < 50){
       
        console.log("done");
       
        appData.expenses[a] = b;
} else {
   
    console.log("Bad result");
    i--;
}

    i++;

}    
while (i < 2);*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}




