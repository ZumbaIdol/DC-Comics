// console.log('in comic js')
// debugger

class DcComic {
    static all = []
    constructor(dc_comic) {
        this.dc_comic.id = dc_comic.id
        this.title = dc_comic.title
        this.hero = dc_comic.hero
        this.heroine = dc_comic.heroine
        this.villain = dc_comic.villain
        DcComic.all.push(this)
    }

    displayComic() {
        const comicList = document.getElementById(`user-"${this.dc_comic.user_id}"-dc_comic`)
        const comicLi = document.createElement('li')
        comicLi.id = `comic-"${this.dc_comic.id}"`
        comicLi.innerText = `"${this.dc_comic.title}" ("${this.dc_comic.hero}", "${this.dc_comic.heroine}", "${this.dc_comic.villain}")`
        
        const removeButton = document.createElement('button')
        removeButton.classList += "remove"
        removeButton.setAttribute("data-dc_comic-id", this.dc_comic.id)
        removeButton.innerText = "Remove"
        
        removeButton.addEventListener('click', removeComic)
        comicLi.appendChild(removeButton)
        comicList.appendChild(comicLi)
    }
}
