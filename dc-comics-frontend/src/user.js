class User {
    static all = []
    constructor(data) {
        this.id = data.id
        this.name = data.name
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
}

