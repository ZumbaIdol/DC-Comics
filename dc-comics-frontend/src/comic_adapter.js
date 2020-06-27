// console.log('in comic adapter')

class ComicAdapter {
    addComic(e) {
        const userId = e.target.dataset.userId
        const comicData = {
            userId: userId
        }
    
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(comicData)
        }
    
        fetch(COMICS_URL, configObj)
        .then(function(resp) {
            if (!resp.ok) {
                throw Error(resp.statusText)
            }
            return resp.json()
        })
        .then(function(dc_comic) {
            for (const dc_comic of user.dc_comics) {
                // debugger
                const newComic = new DcComic(dc_comic)
                newComic.displayComic()
            // displayComic(dc_comic)
            }
        })
    }
    
    removeComic(e) {
    const dc_comicId = e.target.dataset.dc_comicId
    const configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    // Fetches can stay here or be put in an adapter class
    fetch(`${COMICS_URL}/${dc_comicId}`, configObj )
        .then(function(resp) {
            return resp.json()
        })
        .then(function(dc_comic) {
            const removedComic = document.getElementById(`comic-${dc_comic.id}`)
            removedComic.remove()
        })
    }
}