var database;
var gameState = 0, playerCount;
var game, form, player  
var playerData = []

function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth,displayHeight);
  game = new Game ()
  game.readGame ()
  game.start ()
  
}

function draw(){
  background("white");
  if (playerCount == 4) {
    game.update (1)
  }
  if (gameState == 1) {
    game.play ()
  }
  
}

