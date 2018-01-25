//var canvas, ctx;
var game;
var board

window.onload = function() {
  game = new Game();
  var keys = new Keyboard();
  board = new Board();

  setInterval(renderGame, 30);
  setInterval(game.generateFood.bind(game), 2000);
};

function Game() {
  this.player = new Player();
  // this.player2 = new Player();
  this.food = [];


  window.addEventListener(
    "keydown",
    this.player.keyboardEventDown.bind(this.player)
  );
}
//establish both food types
Game.prototype.generateFood = function() {
  var healthy = Math.random() > 0.5;
  var foodInst;

  if (healthy) {
    foodInst = new Food(10);
  } else {
    foodInst = new Food(-10);
  }
  this.food.push(foodInst);
};

Game.prototype.checkCollision = function(player, food) {
  return (
    food.x < player.x + player.width &&
    food.x + food.width > player.x &&
    food.y < player.y + player.height &&
    food.y + food.height > player.y
  );
};
Game.prototype.checkScore = function() {
  if (this.player.score >= 100) {
    console.log("WIN WIN WIN");
  }
};

function renderGame() {
  //render the player
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.player.renderPlayer();
  
  
  //render every food item
  for (var i = game.food.length - 1; i >= 0; i--) {
    var elem = game.food[i];
    elem.move();
    elem.render();
    if (game.checkCollision(game.player, elem)) {
      elem.delete();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.player.renderPlayer();
      // game.player.renderPlayer2();
      game.food.splice(i, 1);
      game.player.updateScore(elem. points);
      game.checkScore();
    };
    board.showScore();
  }
}
