// - Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let idText = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    idText.style.display = 'none';

}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button1 = document.getElementById('button1');
button1.onclick = function () {
    button1.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let button2 = document.getElementById('button2');
button2.onclick = function () {
    let age = document.getElementById('age').value;
    if (age < 18 ){
        alert('Мало рочків');
    }else if (age >= 18){
        alert('Руки на стіл');
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu');
let menu_title = document.getElementsByClassName('menu_title');

menu_title.onclick = function () {
    menu.style.display = 'none';
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments =[
    {title : 'loremA', body:'AAA'},
    {title : 'loremB', body:'BBB'},
    {title : 'loremC', body:'CCC'}
];

let divMain = document.createElement('div');
for (const comment of comments){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    h3.innerText = comment.title;
    p.innerHTML = comment.body;
    btn.innerHTML = 'Закрити блок';

    btn.onclick = function (){
        p.style.display = 'none';
    }
    div.append(h3, p ,btn);
    divMain.appendChild(div);
}
document.body.appendChild(divMain);


