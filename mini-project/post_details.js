let url = new URL(location.href);
let idOfPost = url.searchParams.get('id');

 fetch('https://jsonplaceholder.typicode.com/users/posts'+ idOfPost)
     .then(value => value.json())
     .then(value => {
         let div = document.createElement('div');
         div.innerText = JSON.stringify(value);
         document.body.appendChild(div);

         fetch('https://jsonplaceholder.typicode.com/posts/'+ value.id +'/comments')
             .then(comments => comments.json())
             .then(comments => {
                 let div2 = document.createElement('div')
                 div2.innerText = JSON.stringify(comments);
                 document.body.appendChild(div2);

             })

     })


