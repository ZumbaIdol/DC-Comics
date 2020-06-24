// console.log('in comic js')

class DcComic {
    // static all = []
    constructor(dc_comic) {
        this.id = dc_comic.id
        this.title = dc_comic.title
        this.hero = dc_comic.hero
        this.heroine = dc_comic.heroine
        this.villain = dc_comic.villain
        DcComic.all.push(this)
    }

    displayComic() {
        debugger
        return `
        <li id=comic-"${this.id}">"${dc_comic.title}" ("${dc_comic.hero}" "${dc_comic.heroine}" "${dc_comic.villain}"</li>
        <button id=data-dc_comic-id"${this.id}">Remove Comic></button>`
    }
    
}

DcComic.all = []