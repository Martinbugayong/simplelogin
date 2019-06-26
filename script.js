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

function x (){
    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let currentUser = users.find(function(user){
        return user.name === username;
    })
    /* the higherorder function ".find" a method in JS. it is the same as the forloop below

    for (i = 0; i < users.length; i++) {
        if (username === users[i].name) {
            currentUser = users[i]
        }
    }
    */
    if (username === currentUser.name &&
        password === currentUser.password
    ){
        window.location = 'yeup.html'
    } else {
        window.location = 'nope.html'
    }   
}

function enterKey (e){
    if (e.keyCode == 13) {
        window.location = 'yeup.html'
    } 
}

document.getElementById('login').addEventListener('click', x);
document.getElementById('password').addEventListener('keydown', enterKey);


