var Game = function(snake, width, height) {
    this.snake = snake;
    this.width = width;
    this.height = height;
    this.running = true
}

Game.prototype = {

    checkInBounds: function() {

        var xPosition = this.snake.position[0].x;
        var yPosition = this.snake.position[0].y;

        var xOutBounds = (xPosition < 0) || (xPosition > this.width);
        var yOutBounds = (yPosition < 0) || (yPosition > this.height);

        if (xOutBounds || yOutBounds) {
            this.running = false;
        }
    },

    reset: function() {
        this.running = true;
    }

}