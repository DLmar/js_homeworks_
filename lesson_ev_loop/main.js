// Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі


function planOnDay(isWorkingDays){
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if (isWorkingDays){
          console.log('working day plan: ')
          resolve(isWorkingDays);
      }else {
          console.log('weekend')
          reject('weekend');
      }
    },1000)


    })
}

let morningTime = '7.00'
function wakeup(morningTime){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if (morningTime) {
                console.log('1) wake up');
                resolve(morningTime);
            } else {
                console.log('steel sleeping')
                reject('steel sleeping');
            }
        },3000)
    } )
}

let products = 'some food';
function breakfast(products){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if (products) {
                console.log('2) cook some breakfast');
                resolve(products);
            } else {
                console.log("u can't cook. Buy some products ");
                reject("u can't cook. Buy some products ");
            }
        },1000)
    })
}

function takeShower(water){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (water){
                console.log('3) take a shower');
                resolve(water);
            } else {
                console.log('shit. there is no water to take a shower')
                reject('shit. there is no water to take a shower');
            }
        },5000)
    })
}

function waitBus(yourBus){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (yourBus){
                console.log('4) sit in a bus')
             resolve(yourBus);
            } else {
                console.log('wait the other one')
                reject('wait the other one');
            }
        },3000)
    })
}

function lunch(products){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if (products){
                console.log('5) cook some lunch')
                resolve (products);
            } else {
                console.log("u can't cook. Buy some products")
                reject("u can't cook. Buy some products ");
            }
        },1000)
    })
}

let trainingTime = '17.00'
function training(trainingTime){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (trainingTime){
                console.log('6) start training')
                resolve(trainingTime);
            } else {
                console.log('not a training time')
                reject('not a training time');
            }
        },2000)
    })
}

let timeD = '18.00';
function goOutWithDog(timeD){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (timeD) {
                console.log('7) go out with the dog')
                resolve(timeD)
            } else {
                console.log('not the right time to go')
                reject('not the right time to go ')
            }
        },5000)
    })
}

function dinner(products){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if (products){
                console.log('8) cook some dinner')
                resolve (products);
            } else {
                console.log("u can't cook. Buy some products ")
                reject("u can't cook. Buy some products ");
            }
        },1000)
    })
}

let timeSleep = '23.00';
function goSleep(timeSleep){
    return new Promise((resolve, reject) => {
     setTimeout(()=>{
         if (timeSleep){
             console.log('9) sleep')
             resolve(timeSleep);
         } else {
             console.log("don't sleep")
             reject("don't sleep");
         }
     },3000)
    })
}

planOnDay(true)
    .then(morningTime =>{
    return wakeup(morningTime);
})
    .then(products =>{
    return breakfast(products);
})
    .then(water =>{
    return takeShower(water);
})
    .then(yourBus =>{
    return waitBus(yourBus);
})
    .then(products =>{
    return lunch(products);
})
    .then(trainingTime =>{
    return training(trainingTime);
})
    .then(timeD =>{
    return goOutWithDog(timeD);
})
    .then(products =>{
    return dinner(products);
})
    .then(timeSleep =>{
    return goSleep(timeSleep);
})


