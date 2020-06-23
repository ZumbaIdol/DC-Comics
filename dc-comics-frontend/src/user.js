class User {
    static all = []
    constructor(user) {
        this.id = id
        this.name = user.name
        User.all.push(this)
    }
    
    createUserCard() {
        return `
        <div data-id=${this.id}>
        <p>${this.name}</p>
        <button data-user-id=${this.id}>Add Comic</button>
        <ul id=user-${this.id}-dc_comic
        <li id=comic-${this.id}</li>
        </ul>
        </div `
    }

     addUser(e) {
        fetch(USERS_URL, configObj)
        .then(function(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText)
        }
            return resp.json()
        })
        .then(function(createUserCard) {
            createUserCard()

    document.addEventListener('DOMContentLoaded', function() {
        const userForm = document.querySelector('#user-container')
        userForm.addEventListener('submit', addUser)
        fetchUsers()
            })
        })
    }

    fetchUsers() {
        fetch(USERS_URL)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(users) {
            for (const user of users) {
                // debugger
                const newUser = new User(user)
                createUserCard(user)
            }
        })
    }
}


