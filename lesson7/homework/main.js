// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone){
   this.id = id,
       this.name = name,
       this.surname = surname,
       this.email = email,
       this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
const usersArr = [
    new User (1, 'Vasya', 'Pupkin', '@vasyalflfl', 380670000001),
    new User (6, 'Andriy', 'Htos', '@hrots', 380670000002),
    new User (4, 'Galya', 'Lala', '@lewf', 380670000003),
    new User (2, 'Olya', 'Alsa', '@adnwew', 380670000004),
    new User (8, 'Vika', 'Poradf', '@adwewriybla', 380670000005),
    new User (12, 'Katya', 'Pfpswe', '@t32ybla', 380670000006),
    new User (11, 'Anna', 'Podowa', '@adnr134iybla', 380670000007),
    new User (9, 'Ksenia', 'Qeted', '@adnriy134bla', 380670000008),
    new User (10, 'Ira', 'Mfrs', '@adnriybl32543a', 380670000009),
    new User (14, 'Tina', 'Raryed', '@adnriybla323', 380670000010),
];
console.log(usersArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUser = usersArr.filter((element) =>{
    if (element.id % 2 === 0 ){
        return element;
    }
})
console.log(filterUser);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = usersArr.sort((a,b) => a.id - b.id);
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
   constructor(id, name, surname , email, phone, order ) {
   this.id = id,
   this.name = name,
   this.surname = surname,
   this.email = email,
   this.phone = phone,
   this.order = order
   }
}
// створити пустий масив, наповнити його 10 об'єктами Client
const userClient =[
    new Client (1, 'Vasya', 'Pupkin', '@vasyalflfl', 380670000001, ['pizza','drink']),
    new Client (2, 'Andriy', 'Htos', '@hrots', 380670000002, ['pizza','lala','alala','book']),
    new Client (3, 'Galya', 'Lala', '@lewf', 380670000003, ['pizza', 'koks', 'kokos', 'kokoks']),
    new Client (4, 'Olya', 'Alsa', '@adnwew', 380670000004, ['pizza', 'book']),
    new Client (8, 'Vika', 'Poradf', '@adwewriybla', 380670000005, ['kokos', 'ocean']),
    new Client (12, 'Katya', 'Pfpswe', '@t32ybla', 380670000006, ['kokos']),
    new Client (11, 'Anna', 'Podowa', '@adnr134iybla', 380670000007,['koks','spaghetti','paper']),
    new Client (9, 'Ksenia', 'Qeted', '@adnriy134bla', 380670000008,['koks','abrikos','tomato','apple','fish']),
    new Client (10, 'Ira', 'Mfrs', '@adnriybl32543a', 380670000009,['']),
    new Client (14, 'Tina', 'Raryed', '@adnriybla323', 380670000010,['koks']),
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = userClient.sort((a,b)=> a.order.length - b.order.length);
console.log(sortClient);
