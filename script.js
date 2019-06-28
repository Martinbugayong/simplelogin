const username = document.getElementById('userName');
const password = document.getElementById('password');

const users = [
    {
        name: 'gerrymi',
        password: 'pw1'
    },
    {
        name: 'martin',
        password: 'pw2'
    }
]

function enterKeyLogin (event){
    if (event.keyCode === 13) {
        login();
    }
}

function login() {
    let currentUser = users.find(function(user){
        return user.name === username.value;
    })
    if (username.value === currentUser.name &&
        password.value === currentUser.password) {
            window.location = 'yeup.html'
    } else {
        window.location = 'nope.html'
    }
}

document.getElementById('login').addEventListener('click', login);
document.getElementById('password').addEventListener('keydown', enterKeyLogin);