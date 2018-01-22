var Player = function(){
    this.x = 550;
    this.y = 800;

    this.keyboard = new Keyboard();
    this.renderPlayer();
  };

  Player.prototype.renderPlayer = function(){
      console.log("ENTRAA")
      var canvas = document.getElementById("summer");
      var ctx = canvas.getContext("2d");
      ctx.fillRect(550, 730, 80, 100);
      }



// function moveRight (){

// }
// function moveLeft (){
    
// }
// function jump   (){
    
// }
