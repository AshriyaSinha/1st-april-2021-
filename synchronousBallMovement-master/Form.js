class Form {
    constructor () {
        this.ti = createElement ("h1")
        this.buton = createButton ("Lets Go")
        this.putin = createInput ("Enter Name")
        this.greatin = createElement ("h2")
    }
    display (){
        
        this.ti.position (displayWidth/2,100)
        this.ti.html ("YO GAME YO")
        
        this.buton.position (displayWidth/2,displayHeight/2)

        this.putin.position (displayWidth/2,displayHeight/2 - 50)

        this.buton.mousePressed (function(){
            console.log ("yo")
            this.putin.hide ()
            this.buton.hide ()
            player.name = this.putin.value ()
            playerCount ++
            player.index = playerCount
            player.update ()
            player.updateCount (playerCount)
            this.greatin.position (250,200)
           this.greatin.html ("yo sup"+ player.name)
        })
    }
    invisible () {
        this.ti.hide ()
        this.putin.hide ()
        this.buton.hide ()
        this.greatin.hide()
    }
}