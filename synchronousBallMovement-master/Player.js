class Player {
    constructor () {
        this.name = null;
        this.distance = null;
        this.index = null;
    }
    readCount () {
        var refering = database.ref("playerCount")
        refering.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount (bleh) {
        database.ref ("/").update ({
            playerCount:bleh
        })
    }
    update () {
        database.ref ("Players/Player" + this.index).set ({Name:this.name, Distance:this.distance})
    }

    static readPD () {
        database.ref ("players").on ("value",(data) => {playerData = data.val()})
    }

}