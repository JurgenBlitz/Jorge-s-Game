
function Food() {
        this.speed = 50;
        this.x =  Math.random() * (gameView.width) -100;
        this.y = -50;
        this.points = function(){
            var healthyFood = new Food(-10);
            var junkFood = new Food(+10);
        }
    }

    // function Food() {
    //     this.speed = 50;
    //     this.x =  Math.random() * (gameView.width) -100;
    //     this.y = -50;
    //     this.points = points;
    // }
    // function junkFood(speed, x, y){
    //     Food.call(this, speed, x, y);
    //     this.points = -10;
    //     //this.sprite (insert)
    // }




    Food.prototype.renderFood = function() {
      console.log("Food comes in");
      ctx.fillRect(this.x, this.y, 50, 50);
    };

    Food.prototype.delete = function() {
      this.food.remove();
    };

    // Game.prototype.createFoof = function() {
    //   var that = this;
    //   var pxSec = Math.random() * 250 + 100;
    //   var food = new Enemy(pxSec / this.fps);
    //   this.food.push(food);
    // };