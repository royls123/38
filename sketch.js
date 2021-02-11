var  database;
 var canvas,backgroundimage
 var gameState=0
var playerCount
var form,player,game
var allPlayers
var distance=0
var car1,car2,car3,car4
var cars
function setup(){
  database = firebase.database();
  console.log(database);
 canvas= createCanvas(displayWidth-30,displayHeight-30);
game=new Game()
game.getState()
game.start()
}

function draw(){

  console.log(displayHeight)
  if (playerCount===4){
    game.update(1)
    
  }
  if (gameState===1){
    clear()
    game.play()
  }
}
  