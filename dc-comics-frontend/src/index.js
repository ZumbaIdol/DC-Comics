const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const COMICS_URL = `${BASE_URL}/dc_comics`
const main = document.querySelector('main')

// document.addEventListener('DOMContentLoaded', function() {
//     fetch()
// })

fetch(`${BASE_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse))

// function fetchUsers() {
//     fetch(USERS_URL)
//     .then(function(resp) {
//         return resp.json()
//     })
//     .then(function(users) {
//         for (const user of users) {
//             makeUserCard(user)
//         }
//     })
// }
