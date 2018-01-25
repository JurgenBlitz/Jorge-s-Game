function Player(x, y, kb, img) {
  this.x = x;
  this.y = y;
  this.height = 100;
  this.width = 80;
  this.speed = 15;
  this.gravity = 0.1;
  this.dirX = 0;
  this.dirY = 0;
  this.score = 50;
  this.keyboard = kb;
  this.imgR1 = new Image();
  this.imgR1.src = "images/still-runner-right.png";
  this.imgL1 = new Image();
  this.imgL1.src = "images/still-runner-left.png";
  // this.img2 = new Image();
  // this.img2 = "images/still-rival-right.png";
  this.isLeft = true;
}

Player.prototype.renderPlayer = function() {
  if (this.isLeft) {
    ctx.drawImage(this.imgL1, this.x, this.y, 82, 104);
  } else {
    ctx.drawImage(this.imgR1, this.x, this.y, 82, 104);
  }
};

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

Player.prototype.keyboardEventDown = function(e) {
  if (this.keyboard.keyLeft == e.keyCode) {
    this.dirX = -1;
    this.isLeft = true;
  }
  if (this.keyboard.keyRight == e.keyCode) {
    this.dirX = 1;
    this.isLeft = false;
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
} 
Player.prototype.keyboardEventUpP2 = function(e) {
  if (this.keyboard.keyA == e.keyCode) {
    this.dirX = 0;
    this.isLeft = false;
  }
  if (this.keyboard.keyD == e.keyCode) {
    this.dirX = 0;
    this.isLeft = true;
  }
};

Player.prototype.updateScore = function(points) {
  this.score += points;
  console.log(this.score);
};
