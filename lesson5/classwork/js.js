// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numbersMin = (arg1,arg2,arg3) => {
    if (arg1 < arg2 && arg1 < arg3){
        console.log(arg1);
    }else if (arg2 < arg1 &&arg2 < arg3){
        console.log(arg2);
    }else if(arg3 < arg1 && arg3 < arg2) {
        console.log(arg3);
    }
}
numbersMin(1,0,-3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let numbersMax = (arg1, arg2, arg3) =>{
    if (arg1 < arg2 && arg1 < arg3){
        console.log(arg1);
    }else if(arg2 < arg1 && arg2 < arg3){
        console.log(arg2);
    }else if (arg3 < arg1 && arg3 < arg2){
        console.log(arg3);
    }
}
numbersMax(1,0,-3)

// - створити функцію яка повертає найбільше число з масиву
let arrayNumbers1=[1,-5,-3,4,8,7,11,10];
let arrayMaxNumber = (arrayMax) => {
    let max= arrayMax[0];
    for (const arrayMax of arrayNumbers1){
        if (arrayMax > max){
            max=arrayMax;
        }
    }
    return max;
}
console.log(arrayMaxNumber(arrayNumbers1));

// - створити функцію яка повертає найменьше число з масиву
let arrayNumbers2=[1,-5,-3,4,8,7,11,10];
let arrayMinNumber = (arrayMin) => {
    let min = arrayMin[0];
    for (const arrayMin of arrayNumbers2){
        if (arrayMin < min){
            min = arrayMin;
        }
    }
    return min;
}
console.log(arrayMinNumber(arrayNumbers2));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrayNumbers3 = [1,2,10];
let arraySumNumbers = (arrayNumbers3) =>{
    let sum = 0;
    for (const element of arrayNumbers3){
        sum += element;
    }
    return sum;
}
arraySumNumbers(arrayNumbers3);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrayNumbs = [1,2,3,4,5,6,7,8,9,10];
let arrayMiddle = (arrayNumbs) => {
    let sum = 0;
    for (const element of arrayNumbs){
        sum += element;
    }return sum/arrayNumbs.length;
}
arrayMiddle(arrayNumbs);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minMax = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const element of arg){
        if (element > max){
            max = element;
        }else if (element < min){
            min = element;
        }
    }console.log('max',max);
    return(min);
}
minMax(-1, 2, 3, 11, 9);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randArray=[];
let randNums = (randArray) =>{
    for (let i = 0; i < 100; i++){
        randArray.push(Math.round(Math.random()*100));
    }
    document.write(randArray);
    return randArray;
}
randNums(randArray);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit
// - аргумент, який характеризує кінцеве значення діапазону.
let randomNums = (limit) => {
    let arrayN = [];
    for (let i = 0; i < limit; i++){
        arrayN.push(Math.round(Math.random()*limit));
    }
    console.log(arrayN);
    return arrayN;
}
randomNums(10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array3 = [1,2,3];
const reverse = (array3) =>{
    let newarray3=[];
    for (let i = array3.length - 1, ri=0; i >= 0; i--,ri++) {
       newarray3[ri]=array3[i];

    }
    return newarray3;
}
console.log(reverse(array3));