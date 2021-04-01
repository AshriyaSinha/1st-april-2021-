class Game{
    constructor () {}
    readGame () {
        var refering = database.ref("gameState")
        refering.on("value",function(data){
            gameState = data.val()
        })
    }
    update  (bleh) {
        database.ref ("/").update ({
            gameState:bleh
        })
    }
    start () {
        if (gameState == 0)  {
            player  = new Player ()
            player.readCount ()
            form = new Form ()
            form.display ()
        }
    }

    play () {
        form.invisble ()
        Player.readPD ()
        if (playerData != undefined) {
            var  yposition = 50
            for (var octo in playerData) {
                if (octo == "Player" + player.index) {
                    fill ("red")
                }
                else {
                    fill ("blue")
                }
                
                text (playerData [octo].name + ":" + playerData [octo].distance,450,yposition)
                yposition = yposition + 50
            }
        }
        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.distance = player.distance + 5
            player.update ()
        }
    }
}