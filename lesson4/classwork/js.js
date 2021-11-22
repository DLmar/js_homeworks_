// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbersMin(arg1,arg2,arg3){
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
function numbersMax(arg1,arg2,arg3){
    if (arg1 > arg2 && arg1 > arg3){
        console.log(arg1);
    }else if (arg2 > arg1 &&arg2 > arg3){
        console.log(arg2);
    }else if(arg3 > arg1 && arg3 > arg2) {
        console.log(arg3);
    }
}
numbersMax(10,125,3);


// - створити функцію яка повертає найбільше число з масиву
arrayNumbers=[1,-5,-3,4,8,7,11,10];
function arrayMaxNumber(arrayMax){
    let max= arrayMax[0];
    for (const arrayMax of arrayNumbers){
       if (arrayMax > max){
           max=arrayMax;
       }
    }
    return max;
}
console.log(arrayMaxNumber(arrayNumbers));

// - створити функцію яка повертає найменьше число з масиву
function arrayMinNumber(arrayMin){
    let min= arrayMin[0];
    for (const arrayMin of arrayNumbers){
        if (arrayMin < min){
            min=arrayMin;
        }
    }
    return min;
}
console.log(arrayMinNumber(arrayNumbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let Elements=[1,2,10];
function arrayOfElements(Elements){
    return Elements[0] + Elements[1] + Elements[2];
}
console.log(arrayOfElements(Elements));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let Elements2=[10,20,30,40,50];
function arrayOfElements2(Elements2){
    let sum = 0;
    for (const arrayEl of Elements2){
        sum+=arrayEl;
    }
    return sum/Elements2.length;
}
console.log(arrayOfElements2(Elements2));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function ForMinAndMax(arg){
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments){
        if (element > max) {
            max = element;
        }
        if (element < min){
            min = element;
        }
    }
    console.log('max:',max);
    return min;
}
ForMinAndMax(-1, 2, 3, 11, 9);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomNumber(length) {
     let Array = [];
     for (let i = 0; i < length; i++) {
         Array.push(Math.round(Math.random() * 100));
     }
     return Array;
 }
 document.write(randomNumber(20));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//   limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function Randomizer(arr,limit){
    for (let i=0;i < limit;i++){
        arr[i]=(Math.round(Math.random() * limit));
    }
    return arr;
}
console.log(Randomizer([],5));

function reverse(arr){
    let newArr=[];
    for (let i = newArr.length - 1, ri=0; i >= 0; i--,ri++) {
        newArr[ri] = newArr[i];
    }
    return newArr;
}
