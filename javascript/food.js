function Food(points) {
    this.speed = 10;
    this.x =  Math.random() * (canvas.width) -100;
    this.y = 0;
    this.height = 50;
    this.width = 50;
    this.points = points;
  	this.healthy = (points > 0);
}

Food.prototype.render = function() {
  	if (this.healthy) {
        var img = new Image();
        img.src = "/home/jorge/Documentos/IronFiles/games/Jorge-s-Game/images/apple.png";
    } else {
      var img = new Image();
      img.src = "/home/jorge/Documentos/IronFiles/games/Jorge-s-Game/images/burguer.png";
    }
    ctx.drawImage(img, this.x, this.y, 50, 50);
};

Food.prototype.move = function() {
  this.y += this.speed;
};

Food.prototype.delete = function() {
  ctx.clearRect(this.x, this.y, 50, 50);
};