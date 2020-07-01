// console.log('in user adapter')

class UserAdapter {
    constructor() {
        this.USERS_URL = (`${BASE_URL}/users`)
    }

    addUser(e) {
    const name = e.target.querySelector('#new-user').value
    const userData = {
        name: name
    }
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    }

    return fetch(this.USERS_URL, configObj)
    .then(function(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText)
        }
        return resp.json()
    })
    .then(function(createUserCard) {
        createUserCard()
    })


//     document.addEventListener('DOMContentLoaded', function() {
//         const userForm = document.querySelector('#user-container')
//         userForm.addEventListener('submit', addUser)
//         fetchUsers()
//     })

//     fetchUsers() {
//         return fetch(USERS_URL)
//         .then(function(resp) {
//             return resp.json()
//         })
//         .then(function(users) {
//             for (const user of users) {
//                 // debugger
//                 let newUser = new User(user)
//                 newUser.createUserCard()
//                 // createUserCard(user)
//             }
//         })
//     }
// }


    }
}