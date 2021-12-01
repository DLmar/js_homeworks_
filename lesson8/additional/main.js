// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let rules = document.getElementsByClassName('rules');
let wrap = document.getElementById('wrap');
function reCall(rules,wrap){
    console.log(wrap);
    let arr=[];
    if (wrap.children.length) {
        for (rules of wrap) {
            arr.push(rules);
            reCall(rules);
        }
    }

}
reCall(document.body);