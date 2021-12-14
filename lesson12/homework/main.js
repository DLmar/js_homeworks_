// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts'). then (function (response){
   console.log(response);
   return response.json();
}).then(posts =>{
  console.log(posts);
  let wrapper = document.createElement('wrapper');
  for (const post of posts){
      let divPost = document.createElement('div');
      divPost.classList.add('post');
      divPost.innerHTML = `
      <h2>ID: ${post.id}</h2>
      <h3>Title: ${post.title}</h3>
      <h4>Body: ${post.body}</h4>
          `;
      wrapper.appendChild(divPost);
      document.body.appendChild(wrapper);
  }

})


//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments').then (response =>{
    return response.json();
}).then(comments=>{
    console.log(comments);
    let wrapper = document.createElement('wrapper');
    for (comment of comments){
        let divComment = document.createElement('div')
        divComment.classList.add('comments');
        divComment.innerHTML = `
        <h2>ID: ${comment.id}</h2>
        <h3>Title: ${comment.title}</h3>
        <h4>Body: ${comment.body}</h4>
        `;
        wrapper.appendChild(divComment);
        document.body.appendChild(wrapper);
    }
})
