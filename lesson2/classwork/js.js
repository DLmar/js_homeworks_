// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Введіть число a');
let b = +prompt('Введіть число b');
if (a === b) {
    console.log('Число a = b');
} else if (a > b) {
    console.log('Число a > b');
} else if (a < b) {
    console.log('Число a < b');
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = +prompt('Введіть номер квартири');
if (1 <= apartment <= 20) {
    console.log("Перший під'їзд");
} else if (21 <= apartment <= 48) {
    console.log("Другий під'їзд");
} else if (49 <= apartment <= 90) {
    console.log("Третій під'їзд");
}

// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = +prompt('Введіть число');
if (number === 10) {
    console.log('Правильно');
} else {
    console.log('Неправильно');
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else
let x = {};
if (typeof x === 'number') {
    document.write('це число')
} else if (typeof x=== "string") {
    document.write('це текст')
} else if (typeof x === "object") {
    document.write('це обєкт')
} else if (typeof x === "boolean") {
    document.write('це булеве значення')
} else {
    document.write('не зрозуміло що ви ввели')
}


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = +prompt('Введіть свою температуру')
if (10 <= temperature <= 22) {
    console.log('Бігом дуй в октен');
} else
    console.log('Сиди вдома');

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let num = +prompt('Введіть від 1 до 5');
switch (num) {
    case 1:
        console.log('На тобі авто');
        break;
    case 2:
        console.log('На тобі мото');
        break;
    case 3:
        console.log('На тобі телефон');
        break;
    case 4:
        console.log('На тобі шкарпетки Гордона');
        break;
    default:
        console.log('Не то число ввели, будеш зимою без шкарпеток Гордона');
}