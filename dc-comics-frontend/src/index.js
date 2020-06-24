const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const COMICS_URL = `${BASE_URL}/dc_comics`
const main = document.querySelector('main')

function addUser(e) {
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

    fetch(USERS_URL, configObj)
    .then(function(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText)
        }
        return resp.json()
    })
    .then(function(createUserCard) {
        createUserCard()
    })
}

document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.querySelector('#user-container')
    userForm.addEventListener('submit', addUser)
    fetchUsers()
})


function fetchUsers() {
    fetch(USERS_URL)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(users) {
        for (const user of users) {
            // debugger
            const newUser = new User(user)
            createUserCard()
        }
    })

// function createUserCard(user) {
//     const card = document.createElement('div')
//     card.classList += "card"
//     card.setAttribute("data-id", user.id)
//     const userName = document.createElement('p')
//     userName.innerText = user.name
//     card.appendChild(userName)

//     const addComicButton = document.createElement('button')
//     addComicButton.setAttribute("data-user-id", user.id)
//     addComicButton.innerText = "Add Comic"
//     card.appendChild(addComicButton)
//     addComicButton.addEventListener('click', addComic)

//     const comicList = document.createElement('ul')
//     comicList.id = `user-${user.id}-dc_comic`
//     card.appendChild(comicList)
//     main.appendChild(card)
//     for (const dc_comic of user.dc_comics) {
//         // debugger
//         const newComic = new DcComic(dc_comic)
//         displayComic(dc_comic)
//     }
// }

function addComic(e) {
    const userId = e.target.dataset.userId
    const comicData = {
        userId: userId
    }

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(comicData)
    }

    fetch(COMICS_URL, configObj)
    .then(function(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText)
        }
        return resp.json()
    })
    .then(function(dc_comic) {
        displayComic(dc_comic)
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

function removeComic(e) {
    const dc_comicId = e.target.dataset.dc_comicId
    const configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    fetch(`${COMICS_URL}/${dc_comicId}`, configObj )
        .then(function(resp) {
            return resp.json()
        })
        .then(function(dc_comic) {
            const removedComic = document.getElementById(`comic-${dc_comic.id}`)
            removedComic.remove()
        })
    }
}
