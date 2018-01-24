function Player() {
  this.x = 550;
  this.y = 745;
  this.height = 100;
  this.width = 80;
  this.speed = 15;
  this.gravity = 0.10;
  this.dirX = 0;
  this.dirY = 0;
  this.score = 50;
  this.keyboard = new Keyboard();
};

Player.prototype.renderPlayer = function () {
  // ctx.fillStyle="#000000";
  // ctx.fillRect(this.x, this.y, 80, 100);

  var img = new Image();
  img.src = "images/still-runner-right.png";
ctx.drawImage(img, this.x, this.y, 82, 104);
}

Player.prototype.move = function() {
  var newX = this.x + this.speed * this.dirX;
  var newY = this.y + this.speed * this.dirY;
  if (newX <= canvas.width - 90 && newX >= 0) {
    this.x = newX;
  }
  if (newY <= canvas.width - 110 && newY >= 0) {
    this.y = newY;
  }
};

// Player.prototype.jump = function() {

// }

Player.prototype.keyboardEventDown = function (e) {
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = -1;
    this.move();
  }
  if (this.keyboard.isKeyRight(e)) {
    this.dirX = 1;
    this.move();
  }
  // if (this.keyboard.isKeyUp(e)) {
  //   this.dirY = -1;
  //   this.move();
  // }
};

Player.prototype.keyboardEventUp = function(e) {
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = 0;
  }
  if (this.keyboard.isKeyRight(e)) {
    this.dirX = 0;
  }
  // if (this.keyboard.isKeyUp(e)) {
  //   this.dirY = 1;
  //   this.move();
  // }
};

