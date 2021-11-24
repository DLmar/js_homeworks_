// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let SofRectangle = (a,b) => a * b;
console.log(SofRectangle(10,20))

// - створити функцію яка обчислює та повертає площу кола
let SofCircle = (r)=>Math.PI*r**2;
console.log(SofCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру
let SofCylinder = (h,r) => 2 * Math.PI * r * (r + h);
console.log(SofCylinder(3,4));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1,2,3,'Hello'];
let arrayOut = (array) =>{
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
arrayOut(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) => document.write(`<p>${text}</p>`);
paragraph(`Hello`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list1 = (text) =>{
    for (let i = 0; i < 3; i++){
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
list1('xxx');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list2 = (text,limit) =>{
    for (let i = 0; i < limit; i++){
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
list2('Item',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayElements=['string',1234,32,false,'www',true];
let arrayElementsDo = (arrayElements) =>{
    for (let i = 0; i < arrayElements.length; i++){
        document.write(`<li>${arrayElements[i]}</li>`)
    }
}
arrayElementsDo(arrayElements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrObj = [{id:16,name:'Den',age:19},{id:12,name:'Vasya',age:140},{id:20,name:'Ira',age:20}];
let arrObjDo = (arrObj) =>{
    for (const element of arrObj){
        document.write(`<div> ${element.id} . ${element.name} - ${element.age}</div>`);
    }
}
arrObjDo(arrObj);