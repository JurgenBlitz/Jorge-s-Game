
var game;
var board;
var audio = new Audio("audio/spazzmatica_polka.mp3");

window.onload = function() {
  game = new Game();
  board = new Board();
  //audio.play();

  setInterval(renderGame, 30);
  setInterval(game.generateFood.bind(game), 2000);
};

function Game() {
  var kb1 = new KeyboardArrows();
  this.player = new Player(1000, 745, kb1, "images/still-runner-right.png", "images/still-runner-left.png");
  var kb2 = new KeyboardASDF();
  this.player2 = new Player(200, 745, kb2, "images/still-rival-right.png", "images/still-rival-left.png");
  this.food = [];

  window.addEventListener("keydown", this.player.keyboardEventDown.bind(this.player));
  window.addEventListener("keyup", this.player.keyboardEventUp.bind(this.player));
  window.addEventListener("keydown", this.player2.keyboardEventDownP2.bind(this.player2));
  window.addEventListener("keyup", this.player2.keyboardEventUpP2.bind(this.player2));
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
//check for player vs food collisions
Game.prototype.checkCollision = function(player, food) {
  return (
    food.x < player.x + player.width &&
    food.x + food.width > player.x &&
    food.y < player.y + player.height &&
    food.y + food.height > player.y
  );
};
//check for victory conditions
Game.prototype.checkScore = function() {
  if (this.player.score >= 100) {
    location.href ="victoryone.html";
  } else if (this.player2.score >= 100) {
    location.href ="victorytwo.html";
  }
};

function renderGame() {
  //render the player and enable movement
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.player.move();
  game.player.renderPlayer();
  game.player2.move();
  game.player2.renderPlayer();

  //render every food item
  //delete them from array if they collide
  //update scores for the player
  for (var i = game.food.length - 1; i >= 0; i--) {
    var elem = game.food[i];
    elem.move();
    elem.render();
    if (game.checkCollision(game.player, elem)) {
      elem.delete();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.player.renderPlayer();
      game.food.splice(i, 1);
      game.player.updateScore(elem.points);
      game.checkScore();
    } else if(game.checkCollision(game.player2, elem)) {
      elem.delete();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.player2.renderPlayer();
      game.food.splice(i, 1);
      game.player2.updateScore(elem.points);
      game.checkScore();
    }
    board.showScore();
    board.showScore2();
  }
}
