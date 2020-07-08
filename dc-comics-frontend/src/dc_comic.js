// console.log('in comic js')
// debugger


class DcComic {
    static all = []
    constructor(dc_comic) {
        this.id = dc_comic.id
        this.user_id = dc_comic.user_id
        this.title = dc_comic.title
        this.hero = dc_comic.hero
        this.heroine = dc_comic.heroine
        this.villain = dc_comic.villain
        DcComic.all.push(this)
    }

    displayComic() {
        const comicList = document.getElementById(`user-"${this.user_id}"-dc_comic`)
        const comicLi = document.createElement('li')
        comicLi.id = `comic-"${this.id}"`
        comicLi.innerText = `"${this.title}" ("${this.hero}", "${this.heroine}", "${this.villain}")`
        
        const removeButton = document.createElement('button')
        removeButton.classList += "remove"
        removeButton.setAttribute("data-dc_comic-id", this.id)
        removeButton.innerText = "Remove"
        
        removeButton.addEventListener('click', comicAdapt.removeComic)
        comicLi.appendChild(removeButton)
        comicList.appendChild(comicLi)
    }

        // removeComic(e) {
        // const dc_comicId = e.target.dataset.dc_comicId
        // const configObj = {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // }
        // fetch(`${COMICS_URL}/${dc_comicId}`, configObj )
        //     .then(function(resp) {
        //         return resp.json()
        //     })
        //     .then(function(dc_comic) {
        //         const removedComic = document.getElementById(`comic-${dc_comic.id}`)
        //         removedComic.remove()
        //     })
        // }
}
