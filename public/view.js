var View = function(canvas, segmentSize) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.segment = this.context.createImageData(segmentSize, segmentSize);
    this.segment.data.forEach(function(element, index) {
        if ((index + 1) % 4 == 0) {
            this.segment.data[index] = 255
        }
    }.bind(this));
}

View.prototype = {

    draw: function(snake) {
        this.reset();
        snake.position.forEach(function(point) {
            this.context.putImageData(this.segment, point.x, point.y); 
        }.bind(this));
    },

    reset: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}