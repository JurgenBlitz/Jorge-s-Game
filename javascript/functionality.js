
window.onload = function() {
    var board = new Board();
    var game = new Game();
    var keys = new Keyboard();
   };
   
   function Game() {
    // this.fps = 50;
    this.timer = ("02.00 min") //pass to seconds or something, god dammit
    this.player = new Player();
    var that = this;
    setInterval(function(){
        that.player.renderPlayer();
    }, 50)
}