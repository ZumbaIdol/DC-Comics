class DcComic {
    static all = []
    constructor(dc_comic) {
        this.id = dc_comic.id
        this.title = dc_comic.title
        this.hero = dc_comic.hero
        this.heroine = dc_comic.heroine
        this.villain = dc_comic.villain
        DcComic.all.push(this)
    }

    
}