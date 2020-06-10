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
    comicList.id = `user-${user.id}-dc_comic`
    card.appendChild(comicList)
    // main.appendChild(card)
    for (const dc_comic of user.dc_comics) {
        displayComic(dc_comic)
    }
    main.appendChild(card)
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

    fetch(COMICS_URL, objConfig)
    .then(function(resp) {
        if (!resp.ok) {
            throw Error(resp.status)
        }
        return resp.json()
    })
    .then(function(comic) {
        displayComic(comic)
    })
}

function displayComic(dc_comic) {
    const comicList = document.getElementById(`user-${dc_comic.user_id}-dc_comic`)
    const comicLi = document.createElement('li')
    comicLi.id = `comic-${dc_comic.id}`
    comicLi.innerText = `${dc_comic.title} (${dc_comic.hero}, ${dc_comic.heroine}, ${dc_comic.villain})`

    const removeButton = document.createElement('button')
    removeButton.classList += "remove"
    removeButton.setAttribute("data-dc_comic-id", dc_comic.id)
    removeButton.innerText = "Remove"

    removeButton.addEventListener('click', removeComic)
    comicLi.appendChild(removeButton)
    comicList.appendChild(comicLi)

}
