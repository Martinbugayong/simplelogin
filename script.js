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
    var username = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var currentUser = users.find(function(user){
        return user.name === username;
    })
    // the higherorder function ".find" a method in JS is the same as the forloop below
    // for (i = 0; i < users.length; i++) {
    //     if (username === users[i].name) {
    //         currentUser = users[i]
    //     }
    // }
    if (username === currentUser.name &&
        password === currentUser.password
    ){
        console.log('Login sucess')
    } else {
        console.log('Login failed')
    }   
}

// document.getElementById('login').addEventListener('click', x);
document.getElementById('userName','password').addEventListener('keyup', function(e){
    if (e.keycode === 13) {
        document.getElementById('login').click();
    }
});


