var Board = function() {
  (canvas = document.getElementById("summer")), (ctx = canvas.getContext("2d"));

  canvas.width = 1200;
  canvas.height = 850;

  var background = new Image();
  background.src = "images/field.jpeg";
  background.onload = function() {
    ctx.drawImage(background, 0, 0, 1200, 900);
  };
  Board.prototype.showScore = function() {
    ctx.font = "48px Concert One";
    ctx.fillStyle = "white";
    ctx.fillText("Player 1 Score: " + game.player.score, 800, 50);
  };
  Board.prototype.showScore2 = function() {
    ctx.font = "48px Concert One";
    ctx.fillStyle = "white";
    ctx.fillText("Player 2 Score: " + game.player2.score, 50, 50);
  };
};
