let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    saving: true,
    chooseExpensions: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = prompt('Во сколько обойдется?');

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '') {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {

        if (appData.moneyPerDay < 50) {
            console.log("Вы бедный")
        } else if (appData.moneyPerDay >= 50) {
            console.log("У Вас средний доход!")
        } else if (appData.moneyPerDay >= 100) {
            console.log("Вы богатый!")
        } else {
            console.log("Ошибка!")
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt("Сумма вклада?");
            let percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Ваш доход " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {

        for (let i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = a;

            if (typeof (a) === 'string' && typeof (a) != null && a != '') {

            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        for (i = 0; i < 1; i++) {
            let items = prompt("Что принесёт дополнительный доход?(Перечислите через запятую)", '');

            if (typeof (items) != 'string' || items == "" || items == null) {
                i--
            }else{
                appData.income = items.split(',');
                appData.income.push(prompt("Что то ещё?", ''));
                appData.income.sort();
            }
        }
        appData.income.forEach(function(item, i){
            alert("Способы доп. заработка: " + i + ": " + item);
        })
        for(let key in appData){
            console.log('Наша программа включает в себя данные: ' + key);
            }
        }     
}

let open = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    assignBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
