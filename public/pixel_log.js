var PixelLog = function(width, height, segmentSize) {
    this.emptyPixels = [];
    for(var i=0; i<width-1; i+=segmentSize) {
        for(var j=0; j<width-1; j+=segmentSize) {
            this.emptyPixels.push(new Point(i,j));
        }
    }
}

PixelLog.prototype = {

    getRandomPixel: function() {
        var randIndex = Math.floor(Math.random() * (this.emptyPixels.length)); 
        return this.emptyPixels.splice(randIndex, 1);
    },

    returnPixel: function(point) {
        this.emptyPixels.push(point)
    }
}