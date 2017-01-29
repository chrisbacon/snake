var segmentSize = 4;
var startingPoint = new Point(80, 120)
var length = 10;
var fps = 15;

var view;
var snake;
var game;
var gemController;

var frameID;

var init = function() {
    pixelLog = new PixelLog(canvas.width, canvas.height, segmentSize);
    gemController = new GemController(pixelLog);
    view = new View(canvas, segmentSize);
    snake = new Snake(startingPoint, length, segmentSize, pixelLog);
    game = new Game(snake, gemController, canvas.width, canvas.height);
}

var draw = function() {
    setTimeout(function() {
        if (game.running) {

            if (game.timeToCreateGem()) {
                gemController.createGem();
            }

            view.reset();
            view.drawGems(gemController.getGems());    
            view.drawSnake(snake);

            snake.setDirection(view.getDirection());
            snake.move(); 
            
            game.checkForEat();
            game.checkForCrossing();
            game.checkInBounds();
        
            frameID = window.requestAnimationFrame(draw)
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