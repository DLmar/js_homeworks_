let url = new URL(location.href);
let idOfUser = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/'+ idOfUser)
    .then(value => value.json())
    .then(value => {

            let div = document.createElement('div');
            div.innerHTML = `<h4> id: ${value.id}</h4>
            <h4>name: ${value.name}</h4>
            <h4>username: ${value.username}</h4>
            <i>email: ${value.email}</i>
            <ul>address:
                <li>street: ${value.address.street}</li>
                <li>suite: ${value.address.suite}</li>
                <li>city: ${value.address.city}</li>
                <li>zipcode: ${value.address.zipcode}</li>
                <ul>geo:
                    <li>lat: ${value.address.geo.lat}</li>
                    <li>lat: ${value.address.geo.lng}</li>
                </ul>
            </ul>
            <h4>phone: ${value.phone}</h4>
            <h4>website: ${value.website}</h4>
            <ul>company:
                <li>name: ${value.company.name}</li>
                <li>catchPhrase: ${value.company.catchPhrase}</li>
                <li>bs: ${value.company.bs}</li>
            </ul>`;

            document.body.appendChild(div);
            
            let btn = document.createElement('button');
            btn.innerText = 'post of current user';
            btn.classList.add('wrap--btn');
            div.appendChild(btn);

            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/users/' + value.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            let titleDiv = document.createElement('div');
                                titleDiv.innerText = ` -  ${post.title}`;

                            let postDetailsLink = document.createElement('a');
                            postDetailsLink.innerText = '   post details page';
                            postDetailsLink.href = 'post-details.html?id=' + post.id;
                            titleDiv.appendChild(postDetailsLink);
                            div.appendChild(titleDiv);
                        }
                    })
            }
    })
