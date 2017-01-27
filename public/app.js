var segmentSize = 4;
var startingPoint = new Point(30, 30)
var length = 20;
var snake;

var handleKeyPress = function(key) {
    switch (key) {
      case "w":
        snake.setDirection("up");
        break;
      case "s":
        snake.setDirection("down");
        break;
      case "a":
        snake.setDirection("left");
        break;
      case "d":
        snake.setDirection("right");
        break;
    }
}


window.onload = function() {
    canvas = document.querySelector('canvas');
    var view = new View(canvas, segmentSize);
    snake = new Snake(startingPoint, length, segmentSize);
    var button = document.querySelector('button');

    var draw = function() {
        view.draw(snake);
        snake.move();
        window.requestAnimationFrame(draw)
    };

    canvas.onkeydown = function(event) {
        handleKeyPress(event.key);
    };


    button.onclick = function() {
        view.reset();
        snake = new Snake(startingPoint, length, segmentSize);
    };


    window.requestAnimationFrame(draw);
}