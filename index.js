let month = prompt('Введите номер месяца от 1 до 12');
let four_seasons;

if (month >= 1 && month <= 12) {
    if (month == 12 || month <= 2) {
        four_seasons = 'зима';
    } else if (month >= 3 && month <= 5) {
        four_seasons = 'весна';
    } else if (month >= 6 && month <= 8) {
        four_seasons = 'лето';
    } else {
        four_seasons = 'осень';
    }

    let day = +prompt('Введите день месяца:');

    if (day >= 1 && day <= 31) {
        if (month == 2 && day >= 29) {
            alert('В феврале не бывает больше 29 дней!');
        } else if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
            alert('В этом месяце нет столько дней!');
        } else {
            alert(four_seasons + " " + "месяц:" + month + " " + "день:" + day);
        }
    } else {
        alert('Некорректный день месяца!');
    }
} else {
    alert('Некорректный номер месяца!');
}



let day_decade = prompt("Day")

if (day_decade > 0 && day_decade < 11) {
    alert('First decade')
} else if(day_decade > 10 && day_decade < 20) {
    alert('Second decade')
} else if(day_decade > 21 && day_decade < 32) {
    alert('Third decade')
} else {
    alert('Undefinite number')
}