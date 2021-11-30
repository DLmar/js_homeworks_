// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас який впливає на колір тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
let sep_2021 = document.getElementById('main_header');
sep_2021.classList.add('sep-2021');


// b) робить шириниу елементу ul 400px
let ulByTag = document.getElementsByTagName('ul');
ulByTag.style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elementsByClassName = document.getElementsByClassName('linkList');
for (const element of elementsByClassName){
    element.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
function someText(text){
    let elementsByClassName1 = document.getElementsByClassName('listElement2');
    elementsByClassName1.innerText = text;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let lili = document.getElementsByTagName('li');
for (const item of lili){
    item.style.background = 'blue';
}


// f) отримує всі елементи 'a' та додає їм клас anchor
let aList = document.getElementsByTagName('a');
for (const aElement of aList){
    aElement.classList.add('anchor');
}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aElements = document.getElementsByTagName('a');
for (const aElement of aElements ){
    if (aElement === 'link3'){
        aElement.style.fontSize = '40px';
    }
}


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aElems = document.getElementsByTagName('a');
for (const aElem of aElems ){
    let NewClass = a.innerText;
    aElem.classList.add('NewClass');
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let elementsByClassName1 = document.getElementsByClassName('sub-header');
for (const element of elementsByClassName1){
    element.style.background = prompt('color?');
}


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let elementsByClassName2 = document.getElementsByClassName('sub-header');
for (const element of elementsByClassName2){
    if (element.innerText === 'content 2 segment'){
        element.style.color = prompt('color?');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName('content_1');
content_1.innerText = prompt();


// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (const elem of p){
    elem.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const elem of text2){
    elem.innerText = 'sep-2021';
}
