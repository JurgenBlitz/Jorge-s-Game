var canvas, ctx;
var game;

window.onload = function() {
  var board = new Board();
  game = new Game();
  var keys = new Keyboard();

  setInterval(renderGame, 50);
  setInterval(game.generateFood.bind(game), 2000);
};

function Game() {
  this.player = new Player();
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
  if (
    food.x < player.x + player.width &&
    food.x + food.width > player.x &&
    food.y < player.y + player.height &&
    food.y + food.height > player.y
  ) {
    food.delete();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.player.renderPlayer();
  }
};

function renderGame() {
  //render the player
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.player.renderPlayer();


  //render every food item
  game.food.forEach(function(elem) {
    elem.move();
    elem.render();
    game.checkCollision(game.player, elem);
  });

}