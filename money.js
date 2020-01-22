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