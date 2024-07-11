let name = 'Zachary';
let username = 'zpremack';
let email = 'zacharypremack@gmail.com';

let dataobj = { name, username, email };
let url1 = 'https://users-18kl.onrender.com/userjson';

let options1 = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataobj)
};

fetch(url1, options1)
    .then(response => {
        return response.text();
    })
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.log('Error:', error);
    });