function Player(x, y, kb, imgR, imgL) {
  this.x = x;
  this.y = y;
  this.height = 100;
  this.width = 80;
  this.speed = 15;
  //this.gravity = 0.1;
  this.dirX = 0;
  this.dirY = 0;
  this.score = 50;
  this.keyboard = kb;
  this.imgR = new Image();
  this.imgR.src = imgR;
  this.imgL = new Image();
  this.imgL.src = imgL;
  this.isLeft = true;
}

Player.prototype.renderPlayer = function() {
  if (this.isLeft) {
    ctx.drawImage(this.imgL, this.x, this.y, 82, 104);
  } else {
    ctx.drawImage(this.imgR, this.x, this.y, 82, 104);
  }
};

Player.prototype.move = function() {
  var newX = this.x + this.speed * this.dirX;
  if (newX <= canvas.width - 90 && newX >= 0) {
    this.x = newX;
  }
};

Player.prototype.keyboardEventDown = function(e) {
  if (this.keyboard.keyLeft == e.keyCode) {
    this.dirX = -1;
    this.isLeft = true;
  }
  if (this.keyboard.keyRight == e.keyCode) {
    this.dirX = 1;
    this.isLeft = false;
  }
  if (this.keyboard.keyUp == e.keyCode) {
    this.dirY = -1;
  }
};
Player.prototype.keyboardEventDownP2 = function(e) {
  if (this.keyboard.keyA == e.keyCode) {
    this.dirX = -1;
    this.isLeft = true;
  }
  if (this.keyboard.keyD == e.keyCode) {
    this.dirX = 1;
    this.isLeft = false;
  }
  if (this.keyboard.keyW == e.keyCode) {
    this.dirY = -5;
  }
};

Player.prototype.keyboardEventUp = function(e) {
  if (this.keyboard.keyLeft == e.keyCode) {
    this.dirX = 0;
    this.isLeft = false;
  }
  if (this.keyboard.keyRight == e.keyCode) {
    this.dirX = 0;
    this.isLeft = true;
  }
  if (this.keyboard.keyUp == e.keyCode) {
    this.dirY = 0;
  }
};

Player.prototype.keyboardEventUpP2 = function(e) {
  if (this.keyboard.keyA == e.keyCode) {
    this.dirX = 0;
    this.isLeft = false;
  }
  if (this.keyboard.keyD == e.keyCode) {
    this.dirX = 0;
    this.isLeft = true;
  }
  if (this.keyboard.keyW == e.keyCode) {
    this.dirY = 0;
  }
};

Player.prototype.updateScore = function(points) {
  this.score += points;
  console.log(this.score);
};
