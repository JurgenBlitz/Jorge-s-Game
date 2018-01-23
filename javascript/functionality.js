var canvas, ctx;
var game;

window.onload = function() {
  var board = new Board();
  game = new Game();
  var keys = new Keyboard();

  setInterval(renderGame, 50);
};

function Game() {
  // this.fps = 50;
  this.timer = "02.00 min"; //pass to seconds or something, god dammit
  this.player = new Player();

  window.addEventListener(
    "keydown",
    this.player.keyboardEventDown.bind(this.player)
  );
}

function renderGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.player.renderPlayer();
}
