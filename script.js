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

// function clickLogin (){
//     let username = document.getElementById('userName').value;
//     let password = document.getElementById('password').value;
//     let currentUser = users.find(function(user){
//         return user.name === username;
//     })
//     /* the higherorder function ".find" a method in JS. it is the same as the forloop below

//     for (i = 0; i < users.length; i++) {
//         if (username === users[i].name) {
//             currentUser = users[i]
//         }
//     }
//     */
//     if (username === currentUser.name &&
//         password === currentUser.password
//     ){
//         window.location = 'yeup.html'
//     } else {
//         window.location = 'nope.html'
//     }   
// }

function enterKeyLogin (event){
    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let currentUser = users.find(function(user){
        return user.name === username;
    })
    if (username === currentUser.name &&
        password === currentUser.password &&
        event.keyCode === 13) {
            window.location = 'yeup.html'
    } else if (
        username !== currentUser.name || 
        password !== currentUser.password &&
        event.keyCode === 13) {
            window.location = 'nope.html'
        }
}

// document.getElementById('login').addEventListener('click', clickLogin);
document.getElementById('password').addEventListener('keydown', enterKeyLogin);


