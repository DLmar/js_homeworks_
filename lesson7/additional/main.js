// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
class userInfo {
    constuctor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.phone = phone;
        this.website = website;


        this.address = class Address {
            constructor(street, suite, city, zipcode, geo) {
                this.street = street;
                this.suite = suite;
                this.city = city;
                this.zipcode = zipcode;
                this.geo = class Geo {
                    constructor(lat, lng) {
                        this.lat = lat
                        this.lng = lng
                    }

                }
            }
        }


        this.company = class CompanyInfo {
            constructor(name, catchPhrase, bs) {
                this.name = name;
                this.catchPhrase = catchPhrase;
                this.bs = bs;
            }
        }
    }
}
let userGeo =  new userInfo.Address.Geo ('-37.3159','81.1496');
let userAddress = user.address('Kulas Light','Apt. 556','Gwenborough','92998-3874',userGeo);
let userCompany = new userInfo.CompanyInfo ('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')

let user = new userInfo(1,'Leanne Graham','Bret','Sincere@april.biz',userAddress,'1-770-736-8031 x56442',userCompany);
console.log(user);


// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }