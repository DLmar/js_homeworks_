// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);

console.log('-----------------');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase1 = str1.toUpperCase()
console.log(toUpperCase1);

let toUpperCase2 = str2.toUpperCase()
console.log(toUpperCase2);

let toUpperCase3 = str3.toUpperCase()
console.log(toUpperCase3);

console.log('-----------------');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase1 = str1.toLowerCase();
console.log(toLowerCase1);

let toLowerCase2 = str2.toLowerCase();
console.log(toLowerCase2);

let toLowerCase3 = str3.toLowerCase();
console.log(toLowerCase3);

console.log('-----------------');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
let trim = str4.trim();
console.log(trim);

console.log('-----------------');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
let stringToarray = (str) =>{
    return str.split(' ');
}
let arr = stringToarray(str);
console.log(arr);

console.log('-----------------');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) =>{
    return str.substring(0,length);
}
console.log(delete_characters(str,6));

console.log('-----------------');

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str5 = "HTML JavaScript PHP";
let insert_dash = (str5) =>{
    let newstr;
    newstr = str5.split(' ').join('-').toUpperCase();
    return newstr;
}
console.log(insert_dash(str5));
console.log('-----------------');
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let strdo = (str10) =>{
    return str10[0].toUpperCase()+str10.slice(1)
}
console.log(strdo('hello hey hoho'));

console.log('-----------------');
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
 };
 console.log(capitalize('hello hey hoho'));