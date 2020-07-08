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

    fetch(USERS_URL, configObj)
        .then(function(resp) {
            if (!resp.ok) {
                throw Error(resp.statusText)
            }
            return resp.json()
        })
        .then(function(json) {
            const user = new User(json)
            user.createUserCard()
        })
    }
}