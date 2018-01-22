var Player = function(speed){
    this.height = 0;
    this.x = 550;
    this.y = 800;
    this.dirX = 0;
    this.dirY = 0;
    this.speed = speed;
    this.keyboard = new Keyboard();
    this.renderPlayer();
  };

  Player.prototype.renderPlayer = function(){
    var canvas = document.getElementById("player-1"),
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#388209";
    ctx.fillRect(550, 800, 40, 70);
  }
  Player1.renderPlayer();
/*
function moveRight (){

}
function moveLeft (){
    
}
function jump   (){
    
}
*/