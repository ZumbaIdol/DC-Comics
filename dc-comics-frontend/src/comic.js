class Comic {
    static all = []
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.hero = data.hero
        this.heroine = data.heroine
        this.villain = data.villain
        Comic.all.push(this)
    }
}