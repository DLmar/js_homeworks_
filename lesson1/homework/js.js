<!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.-->
<!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
let z = 'hello';  console.log(z); alert(z); document.write(z);
let b = 'owu';  console.log(b); alert(b); document.write(b);
let c = 'com';  console.log(c); alert(c); document.write(c);
let d = 'ua';  console.log(d); alert(d); document.write(d);
let e = 1;  console.log(e); alert(e); document.write(e);
let v = 10;  console.log(v); alert(v); document.write(v);
let g = -999;  console.log(g); alert(g); document.write(g);
let q = 123;  console.log(q); alert(b); document.write(b);
let l = 3.14;  console.log(l); alert(l); document.write(l);
let p = 2.7;  console.log(p); alert(p); document.write(p);
let n = 16;  console.log(n); alert(n); document.write(n);
let t = true;  console.log(t); alert(t); document.write(t);
let f = false;  console.log(f); alert(f); document.write(f);


<!-- - Переприсвоїти кожній змінній з завдання значення на довільне.-->
<!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
 z = 'nana';  console.log(z); alert(z); document.write(z);
 b = 'xx';  console.log(b); alert(b); document.write(b);
 c = 'www';  console.log(c); alert(c); document.write(c);
 d = 'lala';  console.log(d); alert(d); document.write(d);
 e = 7;  console.log(e); alert(e); document.write(e);
 v = 943;  console.log(v); alert(v); document.write(v);
 g = -9229;  console.log(g); alert(g); document.write(g);
 q = 12123;  console.log(q); alert(b); document.write(b);
 l = 33314;  console.log(l); alert(l); document.write(l);
 p = 2127;  console.log(p); alert(p); document.write(p);
 n = 1006;  console.log(n); alert(n); document.write(n);
 t = false;  console.log(t); alert(t); document.write(t);
 f = true;  console.log(f); alert(f); document.write(f);


<!-- - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)-->
let firstName = 'Denys';
let middleName ='Lopushanskyi';
let lastName= 'Igorovich';
let person=(`${firstName} ${middleName} ${lastName}`);


<!-- - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.-->
<!--Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".-->
firstName = prompt('firstName');
lastName = prompt('lastName');
let age = prompt('age');
console.log('Вітаю',firstName,lastName,'Тобі',age,'років' );


<!-- - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.-->
<!--let a = 100; let b = '100'; let c = true;-->
let aaa = 100;
let bbb = '100';
let ccc = true;
console.log(typeof(aaa));
console.log(typeof(bbb));
console.log(typeof(ccc));


<!-- - Визначити відповідний оператор в виразах що б вийшов відповідний результат.-->
<!--В однакових виразах не використовувати однакові оператори!!!-->
<!--5 ? 6 -> true-->
<!--5 ? 6 -> false-->
<!--5 ? 6 -> false-->
<!--5 ? 6 -> false-->
<!--10 ? 10 -> true-->
<!--10 ? 10 -> true-->
<!--10 ? 10 -> false-->
<!--10 ? 10 -> false-->
<!--10 ? 10 -> false-->
<!--123 ? '123' -> false-->
<!--123 ? '123' -> true-->

console.log(5<6);
console.log(5>6);
console.log(5===6);
console.log(5>=6);
console.log(10===10);
console.log(10<=10);
console.log(10!==10);
console.log(10>10);
console.log(10<10);
console.log(123!==123);
console.log(123===123);
<!-- - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?-->
<!--let str = "20";-->
<!--let a = 5;-->
<!--document.write(str + a + "<br/>");-->
<!--document.write(str - a + "<br/>");-->
<!--document.write(str * "2" + "<br/>");-->
<!--document.write(str / 2 + "<br/>");-->

let str = "20";
let a = 5;
document.write(str + a + "<br/>");//205, з'єднює стрінгу з числом "конкатинація" чи шось таке а з рештою(-,*..)воно так не працює бо вже накумекало собі що це вже якісь числа і треба робити з ними конкретні дії віднімання множення і т.д. а з плюсом стрінга буде просто добавляти але якшо плюс впаяти перед стрінгою(або поміняти str і a) то сприйме це як число і буде рахувати
document.write(str - a + "<br/>"); //15
document.write(str * "2" + "<br/>");//40
document.write(str / 2 + "<br/>");//10
