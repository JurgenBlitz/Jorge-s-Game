var Board = function(){
        canvas = document.getElementById("summer"),
        ctx = canvas.getContext("2d");
        
        canvas.width = 1200;
        canvas.height = 850;
        
        var background = new Image;
        background.src = "images/field.jpeg";
        background.onload = function() {
            ctx.drawImage(background, 0, 0);
        };
    }

