var canvas, ctx;
var game;

window.onload = function() {
  var board = new Board();
  game = new Game();
  var keys = new Keyboard();

  setInterval(renderGame, 50);
};

function Game() {
  this.fps = 50;
  this.timer = "02.00 min"; //pass to seconds or something, god dammit
  this.player = new Player();
  this.createFood();
  
  window.addEventListener(
    "keydown",
    this.player.keyboardEventDown.bind(this.player)
  );
}

Game.prototype.createFood = function() {
  this.food = new Food(10);
  this.junk = new Food(-10);
}

function renderGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.player.renderPlayer();
  game.food.render();
  game.junk.render();
}

// Game.prototype.createFood = function() {
//   //var that = this;
//   var pxSec = Math.random() * 250 + 100;
//   var food = new Food(pxSec / this.fps);
//   this.food.push(food);
// };