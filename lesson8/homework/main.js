// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
let contentID = document.getElementById('content');
console.log(contentID);

// -- отримує текст з блоку з id "rules"
let rulesID = document.getElementById('rules');
console.log(rulesID);

// -- замініть текст параграфа з id 'content' на будь-який інший
contentID.innerText = 'hhheeeeelllllloooo';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesID.innerText = 'mmmeeeeennnnnttttoooorrr';

// -- змініть кожному елементу колір фону на червоний
contentID.style.background = 'blue';

// -- змініть кожному елементу колір тексту на синій
rulesID.style.color = 'green';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClassList = document.getElementsByClassName('fc bp');
console.log(rulesClassList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules = document.getElementsByClassName('fc_rules');
for (const item of fc_rules){
    item.style.color = 'red';
}

