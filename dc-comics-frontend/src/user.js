class User {
    // static all = []
    constructor(user) {
        this.id = user.id
        this.name = user.name
        User.all.push(this)
    }

    createUserCard() {
        return `
        <div class="card" data-id="${this.id}">
        <p>"${this.name}"</p>
        <button data-user-id="${this.id}">Add Comic></button>
        <ul><li id=user-"${this.id}"-dc_comic></li></ul>
        for (const dc_comic of user.dc_comics) {
            const newComic = new DcComic(dc_comic)
            newComic.displayComic()
        }
        </div> `
    }
} 
    User.all = []


