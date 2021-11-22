// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function SofRectangle(a,b){
    return resRectangle= a*b;
}
SofRectangle (10, 5);
console.log(resRectangle);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let PI=3.14;
function SofCircle(r){
    return resCircle=PI*r**2;
}
SofCircle(2);
console.log(resCircle);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function SofCylinder(h,r){
    return resCylinder=2*PI*r*(r+h);
}
SofCylinder(5,3);
console.log(resCylinder);


// - створити функцію яка приймає масив та виводить кожен його елемент
let array=[1,2,3,'Hello'];
function Array(array){
    for (let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
Array(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function Paragraph(text){
    for (let i=1;i<5;i++){
        document.write(`<p>${i} - ${text}</p>`);
    }
}
Paragraph('Hello mentor');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list1(text){
    for(let i=1;i<4;i++){
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
list1('длдлдлдл');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text,li){
    for(let i=1;i<li;i++){
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
list2('xxxxx',4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayElements=['string',1234,32,false,'www',true];
function arrElements(arrayElements){
    for (let i=1;i<arrayElements.length;i++){
        document.write(`<li>${arrayElements[i]}</li>`)
    }
}
arrElements(arrayElements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayforobjects=[{id:16,name:'Den',age:19},{id:12,name:'Vasya',age:140},{id:20,name:'Ira',age:20}];
function f(arrayforobjects) {
    for (const arrayitem of arrayforobjects){
        document.write(`<div><li>${arrayitem.id}.  ${arrayitem.name} - ${arrayitem.age}</li></div`);
    }
}
f(arrayforobjects);
