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

let morningTime = '7.00';
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

let trainingTime = '17.00';
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

async function dayPlan(){
    const planDay = await planOnDay(true);
    const wake = await wakeup(morningTime);
    const someBreakfast = await breakfast(products);
    const shower = await takeShower(true);
    const bus = await waitBus(true);
    const someLunch = await lunch(products);
    const sport = await training(trainingTime);
    const goWithDog = await goOutWithDog(timeD);
    const someDinner = await dinner(products);
    const sleep = await goSleep(timeSleep);


}

dayPlan();