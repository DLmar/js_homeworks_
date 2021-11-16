// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr=[2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
i=0
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

// 2. перебрати його циклом for
for (i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i=0;
while (i<arr.length){
    if (i%2===1){
        console.log(arr[i]);
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i=0;i<arr.length;i++){
    if (i%2===1){
        console.log(arr[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i=0;
while (i<arr.length){
    if (i%2===0){
        console.log(arr[i]);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i=0;i<arr.length;i++){
    if (i%2===0){
        console.log(arr[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (i=0;i<arr.length;i++){
    if(arr[i]%3===0){
        arr[i]='okten';
    }
    console.log(arr[i]);
}
// 8. вивести масив в зворотньому порядку.
let arr1=[2,17,13,6,22,31,45,66,100,-18];
for (let i=arr1.length-1;i>=0; i--){
    console.log(arr1[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1.
let arr3=[2,17,13,6,22,31,45,66,100,-18];
i=arr.length-1;
while(i>=0){
    console.log(arr3[i]);
    i--;
}
// 2.
for (let i=arr3.length-1;i>=0;i--){
    console.log(arr3[i]);
}

// 3.
i=arr.length-1;
while(i>=0) {
    if (i % 2 === 1) {
        console.log(arr3[i]);
    }
    i--;
}
// 4.
for (let i=arr3.length-1;i>=0;i--){
    if (i % 2 === 1) {
        console.log(arr3[i]);
    }
}
// 5.
 i=arr.length-1;
 while(i>=0) {
     if (i % 2 === 0) {
         console.log(arr3[i]);
     }
     i--;
 }
// 6.
for (let i=arr3.length-1;i>=0;i--){
    if (i % 2 === 0) {
        console.log(arr3[i]);
    }
}

// 7.
for (i=arr.length-1;i>=0;i--){
    if(arr[i]%3===0){
        arr[i]='okten';
    }
    console.log(arr[i]);
}

