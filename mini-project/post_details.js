let url = new URL(location.href);
let idOfPost = url.searchParams.get('id');

 fetch('https://jsonplaceholder.typicode.com/posts/'+ idOfPost)
     .then(value => value.json())
     .then(value => {
         let div = document.createElement('div');
         div.classList.add('post--det');
         div.innerHTML = JSON.stringify(value);
         div.innerHTML = `<h4>id: ${value.id}</h4> 
         <i>title: ${value.title}</i> 
         <h4>body: ${value.body}</h4>`;

         document.body.appendChild(div);
     fetch('https://jsonplaceholder.typicode.com/posts/'+ value.id + '/comments')
         .then(comments => comments.json())
         .then(comments => {
             for (const comment of comments) {
                 let divComment = document.createElement('div');
                 divComment.classList.add('comments');
                 divComment.innerHTML = JSON.stringify(comment);
                 divComment.innerHTML = `<h4>name: ${comment.name}</h4>
                 <p>email: ${comment.email}</p> 
                 <h5>body: ${comment.body}</h5>`;

                 document.body.appendChild(divComment);
             }
         })

     })


