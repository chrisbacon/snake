var View = function(canvas, segmentSize) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.context.scale(2,2);
    this.segment = this.context.createImageData(segmentSize, segmentSize);
    this.segment.data.forEach(function(element, index) {
        if ((index + 1) % 4 == 0) {
            this.segment.data[index] = 255
        }
    }.bind(this));
    this.direction = "up";
}

View.prototype = {

    draw: function(snake) {
        this.reset();
        snake.position.forEach(function(point) {
            this.context.putImageData(this.segment, point.x, point.y); 
        }.bind(this));
    },

    handleKeyPress: function(key) {
        switch (key) {
          case "w":
            this.direction = "up";
            break;
          case "s":
            this.direction = "down";
            break;
          case "a":
            this.direction = "left";
            break;
          case "d":
            this.direction = "right";
            break;
        }
    },

    getDirection: function() {
        return this.direction;
    },

    reset: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}