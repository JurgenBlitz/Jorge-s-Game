function Food(points) {
    this.speed = 50;
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

Food.prototype.delete = function() {
  //eliminar la comida del tablero
};

var healthyFood = new Food (10); //healthyFood.healthy === true
var junkFood = new Food (-10); //junkFood.healthy === false
