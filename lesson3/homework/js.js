// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr=[1,2,3,4,5];    console.log(arr);
let arr2=['Hello','my','dear','mentor','!'];  console.log(arr2);
let arr3=[1,2,'Hello','mentor',true];  console.log(arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4=[];
arr4[0]=123;
arr4[1]=321;
console.log(arr4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i=0;i<10;i++){
    document.write(`<div>okten</div>`);
}
for (let i=0;i<10;i++){
    document.write(`<div>okten ${i}</div>`);
}
let i=0;
while (i<20){
    document.write(`<h1>text</h1>`);
    i++;
}
let y=0;
while (y<20){
    document.write(`<h1>text ${y}</h1>`);
    y++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr5=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<arr5.length;i++){
    console.log(arr5[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr6=['aa','bb','cc','vv','dd','ll','qq','rr','yy','xx']
for(let i=0;i<arr6.length;i++){
    console.log(arr6[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr7=[1,'bb',2,'vv',3,4,'qq','rr',8,'xx']
for(let i=0;i<arr7.length;i++){
    console.log(arr7[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr8=[1,'bb',2,'vv',false,4,'qq','rr',8,true];
for(i=0;i<arr8.length;i++){
    if (typeof arr8[i]==="boolean"){
        console.log(arr8[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr9=[1,'bb',2,'vv',false,4,'qq','rr',8,true];
for(i=0;i<arr9.length;i++){
    if (typeof arr9[i]==='number'){
        console.log(arr9[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr10=[1,'bb',2,'vv',false,4,'qq','rr',8,true];
for(i=0;i<arr10.length;i++){
    if (typeof arr10[i]==='string'){
        console.log(arr10[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr11=[];
arr11[0]=9;
arr11[1]=2;
arr11[2]='bb';
arr11[3]=true;
arr11[4]=3;
arr11[5]=false;
arr11[6]='pp';
arr11[7]=4;
arr11[8]=true;
arr11[9]='ww';
for(i=0;i<arr11.length;i++){
    console.log(arr11[i]);
}

 // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 for (let i = 0; i < 100; i++) {
     console.log('крок циклу : ' + i + ' ');
     document.write('крок циклу : ' + i + ' ');
 }

 // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
 for (let i = 0; i < 100; i+=2) {
     console.log('крок циклу : ' + i + ' ');
     document.write('крок циклу : ' + i + ' ');
 }

 // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 for (let i = 0; i < 100; i++) {
     if(i % 2 === 0){
         console.log('крок циклу : ' + i + ' ');
         document.write('крок циклу : ' + i + ' ');
     }
 }
 // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

 for (let i = 0; i < 100; i++) {
     if (i % 2 === 1) {
         console.log('крок циклу : ' + i + ' ');
         document.write('крок циклу : ' + i + ' ');
     }
 }
