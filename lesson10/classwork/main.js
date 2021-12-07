// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('btn').onclick = function (){
 let f11 = document.forms.form1.f11.value;
 let f12 = document.forms.form1.f12.value;
 let f21 = document.forms.form2.f21.value;
 let f22 = document.forms.form2.f22.value;
 console.log(f11,f12,f21,f22);
}


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form3 = document.forms['form3'];
form3.onsubmit = function (e){
 e.preventDefault();
 let rows = +form3.rows.value;
 let columns = +form3.columns.value;
 let info = form3.info.value;
 console.log(rows, columns, info);

 let table = document.createElement('table');

 for (let i = 0; i < rows; i++){
  let tr = document.createElement('tr');
  for (let i = 0; i < columns; i++){
   let td = document.createElement('td');
   td.innerText = info;
   tr.appendChild(td);
  }
  table.appendChild(tr);
 }
 document.body.appendChild(table);
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let badWords = ['Шановний','університет','ElectronicsWorkbench','фізик']
let button = document.createElement('button');
button.innerText = 'Кнопка';
button.onclick = function (){
 let word = document.getElementById('badWord').value;
 for (const badWord of badWords){
  if (badWord === word){
   alert('погане слово');
  }
 }
}
document.body.appendChild(button);


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let badSentences = ['Шановний чоловіче','мій університет пиздить гроші','Electronics Workbench нормальна програма, мене не їбе шо у вас не запускається','фізик на бананах']
let button2 = document.createElement('button');
button2.innerText = 'Кнопка2';
button2.onclick = function (){
 let sentence = document.getElementById('badSentence').value;
 for (const badWord of badSentences){
  if (sentence.includes(badWord)){
   alert('погане слово в реченні');
  }
 }
}
document.body.appendChild(button2);