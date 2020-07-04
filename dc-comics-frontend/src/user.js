// console.log('in user js')

class User {
    static all = []
    constructor(user) {
        this.id = user.id
        this.name = user.name
        this.dc_comics = []
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
        card.appendChild(addComicButton)
        // Error on line 25 is like the other undefined errors; call instance of addComic on User class
        addComicButton.addEventListener('click', comicAdapt.addComic)
          
        const comicList = document.createElement('ul')
        comicList.id = `user-"${this.id}"-dc_comic`
        card.appendChild(comicList)
        // debugger
        main.appendChild(card)
        for (const dc_comic of this.dc_comics) {
            const newComic = new DcComic(dc_comic)
            newComic.displayComic()
            // displayComic(dc_comic) 
        }
    }


    // addComic(e) {
    //   e.preventDefault()
    //   const userId = e.target.dataset.userId
    //   const comicData = {
    //       userId: userId
    //   }
  
    //   const configObj = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(comicData)
    // }
  
    // fetch(COMICS_URL, configObj)
    // .then(function(resp) {
    //     if (!resp.ok) {
    //         throw Error(resp.statusText)
    //     }
    //     return resp.json()
    // })
    // .then(function(dc_comic) {
    //     for (const dc_comic of user.dc_comics) {
    //         // debugger
    //         const newComic = new DcComic(dc_comic)
    //         newComic.displayComic()
    //     // displayComic(dc_comic)
    //     }
    // })
// }

    // displayComic() {
    //     const comicList = document.getElementById(`user-"${this.dc_comic.user_id}"-dc_comic`)
    //     const comicLi = document.createElement('li')
    //     comicLi.id = `comic-"${this.dc_comic.id}"`
    //     comicLi.innerText = `"${this.dc_comic.title}" ("${this.dc_comic.hero}", "${this.dc_comic.heroine}", "${this.dc_comic.villain}")`
        
    //     const removeButton = document.createElement('button')
    //     removeButton.classList += "remove"
    //     removeButton.setAttribute("data-dc_comic-id", this.dc_comic.id)
    //     removeButton.innerText = "Remove"
        
    //     removeButton.addEventListener('click', userAdapt.removeComic)
    //     comicLi.appendChild(removeButton)
    //     comicList.appendChild(comicLi)
    // }

    removeComic(e) {
        e.preventDefault()
        const dc_comicId = e.target.dataset.dc_comicId
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        fetch(COMICS_URL/`"${this.dc_comicId}"`, configObj )
            .then(function(resp) {
                return resp.json()
            })
            .then(function(dc_comic) {
                const removedComic = document.getElementById(`comic-"${this.dc_comic.id}"`)
                removedComic.remove() 
            })
        }
    }



    //   <div class="card" data-id="1"><p>David</p><button data-user-id="1">Add Comic</button><ul id="user-1-dc_comic"><li id="comic-1">Snowbirds Don't Fly (Kilowog, Power Girl, Metallo)<button class="remove" data-dc_comic-id="1">Remove</button></li><li id="comic-2">The Coyote Gospel (Cyborg, Batgirl, The Joker)<button class="remove" data-dc_comic-id="2">Remove</button></li><li id="comic-15">Crisis On Infinite Earths (Cyborg, Mera, Solomon Grundy)<button class="remove" data-dc_comic-id="15">Remove</button></li><li id="comic-41">Superman For All Seasons (Kilowog, Raven, General Zod)<button class="remove" data-dc_comic-id="41">Remove</button></li></ul></div><div class="card" data-id="2"><p>Greg</p><button data-user-id="2">Add Comic</button><ul id="user-2-dc_comic"><li id="comic-3">The Coyote Gospel (Mr. Miracle, Hawkgirl, Bizarro)<button class="remove" data-dc_comic-id="3">Remove</button></li><li id="comic-16">The Dark Knight Returns (Batman, Mera, Penguin)<button class="remove" data-dc_comic-id="16">Remove</button></li><li id="comic-40">Multiversity (Tempest, Wonder Woman, Weather Wizard)<button class="remove" data-dc_comic-id="40">Remove</button></li></ul></div><div class="card" data-id="3"><p>Hakim</p><button data-user-id="3">Add Comic</button><ul id="user-3-dc_comic"><li id="comic-4">Swamp Thing: The Anatomy Lesson (Midnighter, Wonder Girl, Lobo)<button class="remove" data-dc_comic-id="4">Remove</button></li><li id="comic-17">Superman For All Seasons (Kilowog, Mary Marvel, Metallo)<button class="remove" data-dc_comic-id="17">Remove</button></li></ul></div><div class="card" data-id="4"><p>Aaron</p><button data-user-id="4">Add Comic</button><ul id="user-4-dc_comic"><li id="comic-5">JLA: Tower Of Babel (Jonah Hex, Wonder Girl, Brainiac)<button class="remove" data-dc_comic-id="5">Remove</button></li><li id="comic-20">The Killing Joke (Martain Manhunter, Wonder Girl, Bizarro)<button class="remove" data-dc_comic-id="20">Remove</button></li></ul></div><div class="card" data-id="5"><p>Theresa</p><button data-user-id="5">Add Comic</button><ul id="user-5-dc_comic"><li id="comic-6">Kingdom Come (Hawkman, Supergirl, Harley Quinn)<button class="remove" data-dc_comic-id="6">Remove</button></li><li id="comic-7">Grant Morrison's Animal Man (Mr. Miracle, Mera, Bizarro)<button class="remove" data-dc_comic-id="7">Remove</button></li></ul></div><div class="card" data-id="6"><p>Deb</p><button data-user-id="6">Add Comic</button><ul id="user-6-dc_comic"><li id="comic-9">Action Comics (Ragman, Hawkgirl, Metallo)<button class="remove" data-dc_comic-id="9">Remove</button></li><li id="comic-18">The Sinestro Corps War (Azrael, Supergirl, Black Manta)<button class="remove" data-dc_comic-id="18">Remove</button></li><li id="comic-44">The Sinestro Corps War (Superboy, Mera, Gorilla Grodd)<button class="remove" data-dc_comic-id="44">Remove</button></li></ul></div><div class="card" data-id="7"><p>Jared</p><button data-user-id="7">Add Comic</button><ul id="user-7-dc_comic"><li id="comic-10">Superman For All Seasons (Rorschach, Batgirl, Ras al Ghul)<button class="remove" data-dc_comic-id="10">Remove</button></li><li id="comic-11">Superman: Red Son (Batman, Black Canary, Deathstroke)<button class="remove" data-dc_comic-id="11">Remove</button></li><li id="comic-12">Superman For All Seasons (Beast Boy, Raven, Despero)<button class="remove" data-dc_comic-id="12">Remove</button></li><li id="comic-13">Crisis On Infinite Earths (Shazam, Wonder Woman, Mr. Freeze)<button class="remove" data-dc_comic-id="13">Remove</button></li><li id="comic-14">Green Arrow: The Longbow Hunters (Green Arrow, Black Canary, Eclipso)<button class="remove" data-dc_comic-id="14">Remove</button></li></ul></div><div class="card" data-id="9"><p>Maddie</p><button data-user-id="9">Add Comic</button><ul id="user-9-dc_comic"><li id="comic-21">The Coyote Gospel (Mr. Miracle, Hawkgirl, Black Manta)<button class="remove" data-dc_comic-id="21">Remove</button></li><li id="comic-24">Identity Crisis (Superman, Starfire, Krona)<button class="remove" data-dc_comic-id="24">Remove</button></li></ul></div><div class="card" data-id="11"><p>Mike</p><button data-user-id="11">Add Comic</button><ul id="user-11-dc_comic"><li id="comic-23">The New Frontier (Ragman, Power Girl, Darkseid)<button class="remove" data-dc_comic-id="23">Remove</button></li><li id="comic-38">The Killing Joke (Captain Comet, Wonder Woman, Ares)<button class="remove" data-dc_comic-id="38">Remove</button></li></ul></div><div class="card" data-id="12"><p>Steve</p><button data-user-id="12">Add Comic</button><ul id="user-12-dc_comic"><li id="comic-25">Swamp Thing: The Anatomy Lesson (Captain Atom, Wonder Girl, Harley Quinn)<button class="remove" data-dc_comic-id="25">Remove</button></li><li id="comic-27">Multiversity (Firestorm, Wonder Woman, Talia al Ghul)<button class="remove" data-dc_comic-id="27">Remove</button></li></ul></div><div class="card" data-id="14"><p>Jerry</p><button data-user-id="14">Add Comic</button><ul id="user-14-dc_comic"><li id="comic-31">The Dark Knight Returns (Jonah Hex, Starfire, Clock King)<button class="remove" data-dc_comic-id="31">Remove</button></li><li id="comic-32">Identity Crisis (Captain Atom, Batwoman, Riddler)<button class="remove" data-dc_comic-id="32">Remove</button></li><li id="comic-33">Batman: Year One (Azrael, Black Canary, Ares)<button class="remove" data-dc_comic-id="33">Remove</button></li></ul></div><div class="card" data-id="15"><p>Stan</p><button data-user-id="15">Add Comic</button><ul id="user-15-dc_comic"><li id="comic-29">Arkham Asylum: A Serious House On Serious Earth (Wildcat, Power Girl, Mongul)<button class="remove" data-dc_comic-id="29">Remove</button></li><li id="comic-30">JLA: Earth 2 (Booster Gold, Wonder Woman, Black Manta)<button class="remove" data-dc_comic-id="30">Remove</button></li><li id="comic-42">Superman For All Seasons (Animal Man, Wonder Woman, Heat Wave)<button class="remove" data-dc_comic-id="42">Remove</button></li><li id="comic-43">The Sinestro Corps War (Kilowog, Hawkgirl, Brainiac)<button class="remove" data-dc_comic-id="43">Remove</button></li></ul></div><div class="card" data-id="16"><p>J. K. Kirby</p><button data-user-id="16">Add Comic</button><ul id="user-16-dc_comic"><li id="comic-34">Teen Titans: The Judas Contract (Shazam, Batwoman, Mr. Freeze)<button class="remove" data-dc_comic-id="34">Remove</button></li><li id="comic-35">The Coyote Gospel (The Comedian, Vixen, Metallo)<button class="remove" data-dc_comic-id="35">Remove</button></li><li id="comic-36">Batman: The Long Halloween (Doctor Fate, Power Girl, Scarecrow)<button class="remove" data-dc_comic-id="36">Remove</button></li><li id="comic-37">Grant Morrison's Animal Man (Shazam, Hawkgirl, Talia al Ghul)<button class="remove" data-dc_comic-id="37">Remove</button></li></ul></div><div class="card" data-id="17"><p>Gerard</p><button data-user-id="17">Add Comic</button><ul id="user-17-dc_comic"><li id="comic-39">Doom Patrol (The Atom, Wonder Woman, Amanda Waller)<button class="remove" data-dc_comic-id="39">Remove</button></li><li id="comic-45">The Killing Joke (The Flash, Raven, Toy Man)<button class="remove" data-dc_comic-id="45">Remove</button></li><li id="comic-46">Action Comics (Shazam, Lady Cain, Gorilla Grodd)<button class="remove" data-dc_comic-id="46">Remove</button></li></ul></div><div class="card" data-id="18"><p>Cindy</p><button data-user-id="18">Add Comic</button><ul id="user-18-dc_comic"><li id="comic-47">Swamp Thing: The Anatomy Lesson (Azrael, Black Canary, Clock King)<button class="remove" data-dc_comic-id="47">Remove</button></li><li id="comic-48">Gotham Central (Martain Manhunter, Lady Cain, Brainiac)<button class="remove" data-dc_comic-id="48">Remove</button></li><li id="comic-49">Whatever Happened To The Man Of Tomorrow? (Azrael, Starfire, Heat Wave)<button class="remove" data-dc_comic-id="49">Remove</button></li>
    //   </ul>
    //   </div>
    //   </main>

    // <div class="villains-container">
    //     <img src="C:\Users\david\dev\flatiron\labs\DC-Comics\dc-comics-frontend\assets\DC Villains.jpg">
    //   </div>

    // <footer class="branding">
    //   <small>© 2020 by David A. Foote <strong>DC Comics</strong></small>
    // </footer>