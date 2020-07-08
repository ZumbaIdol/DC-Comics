class User {
    static all = []
    constructor(user) {
        this.id = user.id
        this.name = user.name
        this.dc_comics = user.dc_comics
        User.all.push(this)
    }

    createUserCard() {
        const card = document.createElement('div')
        card.classList += "card"
        card.setAttribute("data-id", this.id)
        const userName = document.createElement('p')
        userName.innerText = this.name
        card.appendChild(userName)
          
        const addComicButton = document.createElement('button')
        addComicButton.setAttribute("data-user-id", this.id)
        addComicButton.innerText = "Add Comic"
        addComicButton.addEventListener('click', comicAdapt.addComic)
        card.appendChild(addComicButton)
          
        const comicList = document.createElement('ul')
        comicList.id = `user-"${this.id}"-dc_comic`
        card.appendChild(comicList)
        // debugger
        main.appendChild(card)
        for (const dc_comic of this.dc_comics) {
            const newComic = new DcComic(dc_comic)
            newComic.displayComic()
        }
    }
}



   