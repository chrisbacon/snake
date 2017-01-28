var segmentSize = 4;
var startingPoint = new Point(30, 30)
var length = 40;
var fps = 10;

var view;
var snake;
var game;

var frameID;

var init = function() {
    view = new View(canvas, segmentSize);;
    snake = new Snake(startingPoint, length, segmentSize);
    game = new Game(snake, canvas.width, canvas.height);
}

var draw = function() {
    setTimeout(function() {
        view.draw(snake);
        snake.setDirection(view.getDirection());
        snake.move();
        game.checkForCrossing();
        game.checkInBounds();
        if (game.running) {
            frameID = window.requestAnimationFrame(draw)
            console.log(frameID, snake.position[0].x)
        }
    }, 1000 / fps);
};


window.onload = function() {
    canvas = document.querySelector('canvas');
    var button = document.querySelector('button');
    init();

    canvas.onkeydown = function(event) {
        view.handleKeyPress(event.key);
    };

    button.onclick = function() {
        game.running = false;
        setTimeout(function() {
            init();
            canvas.focus();
        }, 100);
    };

    canvas.onfocus = function() {
        draw();
    }

    canvas.focus();
}