var segmentSize = 4;

var n = 20;
var start = n/2;

var length = 10;
var fps = 8;
var width = n*segmentSize;
var height = n*segmentSize;

var startingPoint = new Point(start*width/n , start*height/n)

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

            view.reset();
            view.drawGem(gemController.getGem());    
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
    canvas.height = height;
    canvas.width = width;
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