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
        <p>${this.user.name}</p>
        <button data-user-id=${this.user.id}>Add Comic</button>`
    }
}

