// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let name = document.forms.form1.name;
let age = document.forms.form1.age;
let btn = document.getElementById('btn');
let key = 'key';

let save = (userName, userAge) =>{
  let user = {
    name: userName,
    age: userAge
  }
  localStorage.setItem(key, JSON.stringify(user));
}

btn.onclick = function (){
  save(name.value, age.value);
}



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
form2.onsubmit = function (e) {
  e.preventDefault();
  let model = this.model.value;
  let type = this.type.value;
  let volume = this.volume.value;
  let car = {model: model, type: type, volume: volume};
  let cars = JSON.parse(localStorage.getItem('cars')) || [];
  console.log(cars);
  cars.push(car);
  localStorage.setItem('cars', JSON.stringify(cars));
};