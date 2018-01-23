function Food(points) {
    this.speed = 10;
    this.x =  Math.random() * (canvas.width) -100;
    this.y = 0;
    this.points = points;
  	this.healthy = (points > 0);
}

Food.prototype.render = function() {
  	if (this.healthy) {
        ctx.fillStyle = "#FFFFFF"
    } else {
      	ctx.fillStyle = "#FABADA"
    }
  	ctx.fillRect(this.x, this.y, 50, 50);
};

Food.prototype.move = function() {
  this.y += this.speed;
};

Food.prototype.delete = function() {
  ctx.clearRect(this.x, this.y, 50, 50);
};