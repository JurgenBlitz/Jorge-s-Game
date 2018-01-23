var Board = function(){
        canvas = document.getElementById("summer"),
        ctx = canvas.getContext("2d");
        
        canvas.width = 1200;
        canvas.height = 850;
        
        var background = new Image;
        background.src = "/Images/field.jpeg";
        background.onload = function() {
            ctx.drawImage(background, 0, 0);
        };
    }


// var canvas = document.getElementById("summer"),
// ctx = canvas.getContext("2d");

// canvas.width = 1200;
// canvas.height = 850;

// var background = new Image();
// background.src = "../Images/field.jpeg";
// ctx.drawImage(background, 1200, 850);   
// }
