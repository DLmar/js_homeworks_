// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time=+prompt('Введіть від 0 до 59');
if(time<=15) {
    console.log('Перша чверть години');
}else if(time<=30){
    console.log('Друга чверть години');
}else if(time<=45){
    console.log('Третя чверть години');
}else if(time<60){
    console.log('Четверта черть години');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day=+prompt('Введіть число від 1 до 31');
if(day<=11){
    console.log('перша половина місяця');
} else if(day<=21){
    console.log('друга половина місяця');
}else if(day<=31){
    console.log('третя половина місяця');
}

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//   Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test=true;
if(test===true){
    console.log('Правильно');
}else{
    console.log('Неправильно');
}
(test===true)?console.log('Правильно'):console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a=+prompt('Введіть 1, 0 або -3');
(a!==0)?console.log('Вірно'):console.log('Невірно');

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let plan=+prompt('Введіть порядковий номер тижня');
switch(plan){
    case 1:
        console.log('Понеділок: сидіти з розумним лицем над кодом');
        break;
    case 2:
        console.log('Вівторок: купити слона, а краще двох');
        break;
    case 3:
        console.log('Середа: судити змагання по плюванню верблюдів');
        break;
    case 4:
        console.log('Четвер: дивитися як на Януковича падає вінок');
        break;
    case 5:
        console.log('Пятниця: розказати ще одну байку Мітяю');
        break;
    case 6:
        console.log('Субота: грати з Богом в шахмати, або якшо не прийде то сам з собою (нічо нового)');
        break;
    case 7:
        console.log('Неділя: написати той код над яким сидів з розумним лицем в Понеділок');
        break;
    default:
        console.log('Хьюстон, прийом! Ти не то ввів');
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year=+prompt('Введіть к-сть днів у році');
if (year%4===0){
    console.log('Високосний');
}else{
    console.log('Невисокосний');
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let name= prompt('Яка «офіційна» назва JavaScript?');
if(name ==='ECMAScript'){
    console.log('Правильно');
}else{
    console.log('Не знаєте? ECMAScript!');
}
