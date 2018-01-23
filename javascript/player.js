function Player() {
  this.x = 550;
  this.y = 740;
  this.speed = 15;
  this.dirX = 0;
  this.dirY = 0;
  this.keyboard = new Keyboard();
};

Player.prototype.renderPlayer = function () {
  
  ctx.fillRect(this.x, this.y, 80, 100);
}

Player.prototype.move = function () {
  this.x += this.speed * this.dirX;
  this.y += this.speed * this.dirY;
  if (this.x >= (canvas.width - 80) || this.x <= 0) {
    this.speed *= -1
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

