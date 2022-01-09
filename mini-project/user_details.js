let url = new URL(location.href);
let idOfUser = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/'+ idOfUser)
    .then(value => value.json())
    .then(value => {

            let div = document.createElement('div');
            div.innerText = JSON.stringify(value);
            document.body.appendChild(div);
            
            let btn = document.createElement('button');
            btn.innerText = 'post of current user';
            div.appendChild(btn);

            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/users/' + value.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            let titleDiv = document.createElement('div');
                                titleDiv.innerText = `${post.title}`;

                            let postDetailsLink = document.createElement('a');
                            postDetailsLink.innerText = '   post details page';
                            postDetailsLink.href = 'post_details.html?id=' + post.id;
                            titleDiv.appendChild(postDetailsLink);
                            div.appendChild(titleDiv);
                        }
                    })
            }
    })
