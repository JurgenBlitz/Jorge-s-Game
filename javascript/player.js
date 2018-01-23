function Player() {
  this.x = 550;
  this.y = 740;
  this.speed = 15;
  this.dirX = 0;
  this.dirY = 0;
  this.keyboard = new Keyboard();
};

Player.prototype.renderPlayer = function () {
  ctx.fillStyle="#000000";
  ctx.fillRect(this.x, this.y, 80, 100);
}

Player.prototype.move = function () {
  var newX = this.x + this.speed * this.dirX;
  var newY = this.y + this.speed * this.dirY;
  if (newX <= (canvas.width - 90) && newX >= 0) {
    this.x = newX;
    this.y = newY;
  }
}

Player.prototype.keyboardEventDown = function (e) {
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = -1;
    this.move();
  }
  if (this.keyboard.isKeyRight(e)) {
    this.dirX = 1;
    this.move();
  }
};

Player.prototype.keyboardEventUp = function (e) {
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = 0;
  }
  if (this.keyboard.isKeyRight(e)) {
    this.dirX = 0;
  }
}

