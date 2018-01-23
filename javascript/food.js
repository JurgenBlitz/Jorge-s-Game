 var Food = function () {
        this.speed = 50;
        this.x =  Math.random() * (gameView.width) -100;
        this.y = -50;
        this.points = function(){
            var healthyFood = new Food(-10);
            var junkFood = new Food(+10);
        }
    }

    Food.prototype.renderFood = function(){
    console.log("Food comes in");
    ctx.fillRect(this.x, this.y, 50, 50);
    }