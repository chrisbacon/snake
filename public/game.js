var Game = function(snake, width, height) {
    this.snake = snake;
    this.width = width;
    this.height = height;
    this.running = true;
}

Game.prototype = {

    checkInBounds: function() {

        var xPosition = this.snake.position[0].x;
        var yPosition = this.snake.position[0].y;

        var xOutBounds = (xPosition < 0) || (xPosition >= this.width-1);
        var yOutBounds = (yPosition < 0) || (yPosition >= this.height-1);

        if (xOutBounds || yOutBounds) {
            this.running = false;
        }
    },

    checkForCrossing: function() {
        var head = this.snake.position[0]
        for (var i=3; i<this.snake.position.length; i++) {
            if(head.equals(this.snake.position[i])) {
                this.running = false;
                break;
            }
        }
    },

    reset: function() {
        this.running = true;
    }

}