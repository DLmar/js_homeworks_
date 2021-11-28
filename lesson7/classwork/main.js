// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, MaxSpeed,engineCapacity){
    this.model = model;
    this.producer = producer;
        this.year = year;
        this.MaxSpeed = MaxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function (){    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
            console.log(`їдемо зі швидкістю ${MaxSpeed} на годину`);
        }
        this.info = function (){   // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
           for (const item in this){
               if (typeof this[item] !== 'function') console.log(`${item} - ${this[item]}`);
           }
        }
        this.increaseMaxSpeed = function (newSpeed){  // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
            this.MaxSpeed = this.MaxSpeed + this.newSpeed;
        }
        this.changeYear = function (newValue){ // -- changeYear (newValue) - змінює рік випуску на значення newValue
            this.year = newValue;
        }
        this.addDriver = function (driver){ // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
            this.driver = driver;
        }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car2{
    constructor(model, producer, year, MaxSpeed,engineCapacity) {

        this.model = model;
        this.producer = producer;
        this.year = year;
        this.MaxSpeed = MaxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive () {    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
        console.log(`їдемо зі швидкістю ${MaxSpeed} на годину`);
    }
    info() {   // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        for (const item in this){
            if (typeof this[item] !== 'function') console.log(`${item} - ${this[item]}`);
        }
    }
    increaseMaxSpeed (newSpeed){  // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
        this.MaxSpeed = this.MaxSpeed + this.newSpeed;
    }
    changeYear (newValue){ // -- changeYear (newValue) - змінює рік випуску на значення newValue
        this.year = newValue;
    }
    addDriver (driver){ // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        this.driver = driver;
    }

}

let addCar = new Car('Audi','Germany',2017, 270, 2.0 );
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(30);
addCar.drive();
addCar.changeYear(2018);
addCar.info();
addCar.addDriver('Den');
console.log(addCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


function Popelushka(name, age, sizeOfLeg){
    this.name = name,
    this.age = age,
    this.sizeOfLeg = sizeOfLeg
}
const popelushkaArr = [
    new Popelushka('vlad', 22, 30),
    new Popelushka('jora', 23, 130),
    new Popelushka('vasya', 24, 42),
    new Popelushka('oleg', 25, 41),
    new Popelushka('andriy', 26, 43),
    new Popelushka('sergiy', 27, 412),
    new Popelushka('vitya', -23, 324),
    new Popelushka('vitalik', 30, 111),
    new Popelushka('yura', 123, 0),
    new Popelushka('vova', 1234, 1234)
]

class Prince{
    constructor(name,age,findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }
}
const prince = new Prince('Olya', 5, 1234);

const para=(popelushkaArr,prince)=>{
    for (const item of popelushkaArr){
        if (item.sizeOfLeg === prince.findShoes){
            return `popelushka:${item.name}`;
        }
    }
}
console.log(para(popelushkaArr,prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const somePopelushka = popelushkaArr.find((item)=>item.sizeOfLeg === prince.findShoes);
console.log(somePopelushka);