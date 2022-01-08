// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        console.log(users)


// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.innerText = JSON.stringify(user);
            userDiv.innerText = JSON.stringify(`${user.id}. ${user.name}`);

// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
            let userBtn = document.createElement('button');
            userBtn.innerText = 'details';
            userBtn.onclick = function (){
               location.href = 'user-details.html';
               users = JSON.parse(localStorage.getItem('users')) || [];
               users.push(user);
               localStorage.setItem('users', JSON.stringify(users));
            }
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(posts => posts.json())
                .then(posts => {
                    for (const post of posts) {
                        let postDiv = document.createElement('div');
                        let post_of_current_user = document.createElement('button');
                        post_of_current_user.innerText = `post ${post.id}`;
                        post_of_current_user.onclick = function () {
                            postDiv.innerText = JSON.stringify(`${post.title}`);
                        }

// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.

                        let postBtn = document.createElement('button');
                        postBtn.innerText = 'post info';
                        postBtn.onclick = function () {
                            location.href = 'post-details.html';
                            posts = JSON.parse(localStorage.getItem('posts')) || [];
                            posts.push(post);
                            localStorage.setItem('posts', JSON.stringify(posts));

// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

                            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                .then(comments => comments.json())
                                .then(comments => {
                                    for (const comment of comments) {
                                        comments = JSON.parse(localStorage.getItem('comments')) || [];
                                        comments.push(comment);
                                        localStorage.setItem('comments', JSON.stringify(comments));
                                    }

                                })
                        }
                        postDiv.append(post_of_current_user,postBtn);
                        userDiv.append(postDiv,userBtn);

                    }
                })
            document.body.appendChild(userDiv);
        }
    })



// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки
//(дать задний фон + margin. Иными словами - крайне четкая сетка)

