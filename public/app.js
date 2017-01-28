var segmentSize = 4;
var startingPoint = new Point(30, 30)
var length = 40;
var fps = 10;


window.onload = function() {
    canvas = document.querySelector('canvas');
    var view = new View(canvas, segmentSize);
    var snake = new Snake(startingPoint, length, segmentSize);
    var button = document.querySelector('button');
    var game = new Game(snake, canvas.width, canvas.height);

    var draw = function() {
        setTimeout(function() {
            view.draw(snake);
            snake.setDirection(view.getDirection());
            snake.move();
            game.checkForCrossing();
            game.checkInBounds();
            if (game.running) {
                window.requestAnimationFrame(draw)
            }
        }, 1000 / fps);
    };

    canvas.onkeydown = function(event) {
        view.handleKeyPress(event.key);
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