let users = JSON.parse(localStorage.getItem('users'));

     for (const user of users) {
         let userDiv = document.createElement('div');
         userDiv.innerText = JSON.stringify(user);
         document.body.appendChild(userDiv);
     }
