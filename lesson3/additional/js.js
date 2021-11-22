//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
document.write(`<div>`);
document.write(`a:    `);
let emptyArrayParni=[];
for (let i = 0; i < 100; i++){
    if (i % 2 === 0){
        emptyArrayParni = i;
        document.write(' ',emptyArrayParni);
    }
}
document.write(`</div>`);


//        b. заповнити його 50 непарними числами за допомоги циклу.
document.write(`b: `);
let emptyArrayNeparni=[];
for (let i = 0; i < 100; i++){
    if (i % 2 === 1){
        emptyArrayNeparni = i;
        document.write(' ',emptyArrayNeparni);
    }
}

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
document.write(`<div>`)
document.write(`c:  `);
let arrayRandomNumbers=[];
for (let i = 0;i < 20; i++){
    arrayRandomNumbers.push(Math.round(Math.random() * 100));
    document.write(' ',arrayRandomNumbers[i]);
}
document.write(`</div>`);


//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
document.write(`d:  `);
let arrayRandomNumbers2=[];
for (let i = 0; i < 20; i++){
        arrayRandomNumbers2.push(Math.round(Math.random() * 732)+8);
        document.write('   ', arrayRandomNumbers2[i]);
}

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < 15; i +=3){
    console.log(i);
}
console.log('*****');
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < 15; i += 3){
    if (i % 2 === 0)
    console.log(i);
}
console.log('*****');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newarr=[];
for (let i = 0; i < 30; i += 3){
    if (i % 2 === 0) {
        newarr=i;
        console.log(newarr);
    }
}
console.log('*****');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let array=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
        console.log(array[i-1]);
    }
}
console.log('*****');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrayPrice=[100,250,50,168,120,345,188];
    let sum = 0;
    for (const arrayP of arrayPrice){
        sum+=arrayP;
    }
console.log(sum / arrayPrice.length);
console.log('*****');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrayRandom=[0,2,3,5,20];
let arrNewRandom=[];
for (let i = 0; i < arrayRandom.length ; i++){
    arrNewRandom = arrayRandom[i]*5;
    console.log(arrNewRandom);
}
console.log('*****');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arrayElements=[9,'xxx',11,true,'ll',10,7];
let arrayNumbers=[];
for (let i=0; i<arrayElements.length; i++){
    if (typeof arrayElements[i] === 'number'){
        arrayNumbers = arrayElements[i];
    }console.log(arrayNumbers);
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },

        {
            id: 2, // <===
            name: 'petya',
            age: 30,
            status: true,
            address: {
                user_id: 2, // <===
                country: 'Poland',
                city: 'Krakow'
            }

        },
        {
            id: 3, // <===
            name: 'kolya',
            age: 29,
            status: true,
            address: {
                user_id: 3, // <===
                country: 'Poland',
                city:'Krakow'
            }
        },
        {
            id: 4, // <===
            name: 'olya',
            age: 28,
            status: false,
            address: {
                user_id: 4, // <===
                country:'USA',
                city: 'Miami'
            }
        }
    ]
console.log('*****');

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let newArr=[1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < newArr.length; i++){
        if(newArr[i] % 2 === 0){
            console.log(newArr[i]);
        }
    }

console.log('*****');
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let newArr2=[];
    for (let i = 0; i < newArr.length; i++){
        newArr2 = newArr[i];
        console.log(newArr2);
    }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc=['a','b','c'];
let str='';
    for (let i = 0; i < abc.length; i++){
     str+=abc[i];
    }
    console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i=0;
let str2='';
while (i<abc.length){
    str2+=abc[i];
    i++;
}
console.log(str2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let str3='';
for (const element of abc){
    str3 += element;
}
console.log(str3);
