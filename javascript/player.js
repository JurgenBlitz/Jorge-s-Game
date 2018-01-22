function Player () {
    this.x = 550;
    this.y = 800;
    this.speed = 100;
    this.dirX = 0;
    this.dirY = 0;
    this.keyboard = new Keyboard();
};

  Player.prototype.renderPlayer = function(){
      console.log("Player is in!")
      var canvas = document.getElementById("summer");
      var ctx = canvas.getContext("2d");
      ctx.fillRect(550, 745, 80, 100);
      }

      Player.prototype.move = function() {
        console.log("moving")  
        this.x += this.speed * this.dirX;
        this.y += this.speed * this.dirY;
        this.player.css({top: this.y, left: this.x});
      };
      Player.prototype.keyboardEventDown = function(e){
        if (this.keyboard.isKeyLeft(e)) {
          this.dirX = -1;
        }
        if (this.keyboard.isKeyRight(e)) {
          this.dirX = 1;
        }
      };
      Player.prototype.keyboardEventUp = function(e){
        if (this.keyboard.isKeyLeft(e)) {
          this.dirX = 0;
        }
        if (this.keyboard.isKeyRight(e)) {
          this.dirX = 0;
        }
      };
// function moveRight (){

// }
// function moveLeft (){
    
// }
// function jump   (){
    
// }
