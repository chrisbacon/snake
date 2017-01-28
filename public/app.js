var segmentSize = 4;
var startingPoint = new Point(30, 30)
var length = 40;
var snake;
var fps = 30;
var direction;

var handleKeyPress = function(key) {
    switch (key) {
      case "w":
        direction = "up";
        break;
      case "s":
        direction = "down";
        break;
      case "a":
        direction = "left";
        break;
      case "d":
        direction = "right";
        break;
    }
}


window.onload = function() {
    canvas = document.querySelector('canvas');
    var view = new View(canvas, segmentSize);
    snake = new Snake(startingPoint, length, segmentSize);
    var button = document.querySelector('button');
    var game = new Game(snake, canvas.width, canvas.height);

    var draw = function() {
        setTimeout(function() {
            view.draw(snake);
            snake.setDirection(direction)
            snake.move();
            game.checkForCrossing();
            game.checkInBounds();
            if (game.running) {
                window.requestAnimationFrame(draw)
            }
        }, 1000 / fps);
    };

    canvas.onkeydown = function(event) {
        handleKeyPress(event.key);
    };


    button.onclick = function() {
        view.reset();
        snake = new Snake(startingPoint, length, segmentSize);
        game = new Game(snake, canvas.width, canvas.height);
        canvas.focus();
    };

    canvas.onfocus = function() {
        window.requestAnimationFrame(draw);
    }

    canvas.focus();
}