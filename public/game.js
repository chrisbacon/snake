var Game = function(snake, gemController, width, height) {
    this.snake = snake;
    this.gemController = gemController;
    this.width = width;
    this.height = height;
    this.running = true;
}

Game.prototype = {

    checkInBounds: function() {

        var xPosition = this.snake.getHead().x;
        var yPosition = this.snake.getHead().y;

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

    checkForEat: function() {
        this.gemController.getGems().forEach(function(gem, index) {
            if (gem.position.equals(snake.getHead())) {
                this.snake.addSegment();
                this.gemController.getGems().splice(index, 1);
            }
        })
    },

    reset: function() {
        this.running = true;
    },

    timeToCreateGem: function() {
        return Math.random() < 0.2;
    }

}