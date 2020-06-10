const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const COMICS_URL = `${BASE_URL}/dc_comics`
const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', function() {
    fetchUsers()
})

function fetchUsers() {
    fetch(USERS_URL)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(users) {
        for (const user of users) {
            createUserCard(user)
        }
    })
}

function createUserCard(user) {
    const card = document.createElement('div')
    card.classList += "card"
    card.setAttribute("data-id", user.id)
    const userName = document.createElement('p')
    userName.innerText = user.userName
    card.appendChild(userName)

    const addComicButton = document.createElement('button')
    addComicButton.setAttribute("data-user-id", user.id)
    addComicButton.innerText = "Add Comic"
    card.appendChild(addComicButton)
    addComicButton.addEventListener('click', addComic)

    const comicList = document.createElement('ul')
    comicList.id = `user-${user.id}-comic`
    card.appendChild(comicList)
    main.appendChild(card)
    for (const comic of user.comics) {
        displayComic(comic)
    }
}

function addComic(e) {
    const userId = e.target.dataset.userId
    const comicData = {
        userId: userId
    }

    const objConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(comicData)
    }
}

