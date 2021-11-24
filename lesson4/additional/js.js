// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
let array=[1,2]
function forArguments(array){
     for (let i=0; i<array.length; i++) {
             if (array.length === array[0]) {
                     return console.log(array[i]);
             } else {
                     return console.log(`${array[i]}${array[i+1]}`);
             }
     }
}
forArguments(array);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let array1=[1,2,3,4];
let array2=[2,3,4,5];
let array3=[];

function plusIndex(array1,array2){
    for (let i = 0; i < 4; i++){
            array3.push(array1[i] + array2[i]);
            console.log(array3[i]);
    }
}
plusIndex(array1,array2);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arrObj=[{name: 'Dima', age: 13}, {model: 'Camry'}];
let NameAgeModel = (arrObj) =>{
    let arrKey = [];
    for (let i = 0; i <arrObj.length; i++){
        for (const key in arrObj[i]){
         arrKey.push(key);
        }
    }
    console.log(arrKey);
    return arrKey;
}
NameAgeModel(arrObj);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let arrObj2=[{name: 'Dima', age: 13}, {model: 'Camry'}];
let NameAgeModel2 = (arrObj2) =>{
    let arrKey = [];
    for (let i = 0; i <arrObj2.length; i++){
        for (const key in arrObj2[i]){
            arrKey.push(arrObj2[i][key]);
        }
    }
    console.log(arrKey);
    return arrKey;
}
NameAgeModel2(arrObj);
