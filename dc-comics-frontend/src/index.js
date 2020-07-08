const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const COMICS_URL = `${BASE_URL}/dc_comics`
const main = document.querySelector('main')

const userAdapt = new UserAdapter
const comicAdapt = new ComicAdapter

document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.querySelector('#user-container')
    userForm.addEventListener('submit', userAdapt.addUser)
    fetchUsers()
})

function fetchUsers() {
    fetch(USERS_URL)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(users) {
        for (const user of users) {
            let newUser = new User(user)
            newUser.createUserCard()
        }
    })
}