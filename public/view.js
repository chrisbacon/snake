var View = function(canvas, segmentSize) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.segment = this.context.createImageData(segmentSize,segmentSize);
    this.segment.data[3] = 255;
    this.segment.data[7] = 255;
    this.segment.data[11] = 255;
    this.segment.data[15] = 255;
}

View.prototype = {

    draw: function(snake) {
        this.reset();
        snake.location.forEach(function(point) {
            this.context.putImageData(this.segment, point.x, point.y); 
        }.bind(this));
    },

    reset: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}