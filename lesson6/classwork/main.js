// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

function OkName(name){
    name
        .replaceAll('..','')
        .replaceAll('---','')
        .replaceAll('__','');
}
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randomArray(size){
    let arr=[]
    for (let i = 0; i < size; i++){
       arr.push(Math.round(Math.random()*100))
    }
    return arr;
}
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let randomArray1 = randomArray(10);
randomArray1.sort ((a,b) => a-b);
console.log(randomArray1);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randomArray2 = randomArray(10);
let filtArray= (randomArray2) => {
    return randomArray2.filter(value => value % 2 === 0);
}
console.log(filtArray(randomArray2));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let randomArray3 = randomArray(10);
let calmapArr =(randomArray3) =>{
    return randomArray3.map(value => value.toString());
}
console.log(calmapArr(randomArray3));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (nums,direction) =>{
    if (direction === 'ascending') return nums.sort((a,b)=> a-b);
    if (direction === 'descending') return nums.sort((a,b)=> b-a);
};
console.log(sortNums(nums,'descending'));

// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
