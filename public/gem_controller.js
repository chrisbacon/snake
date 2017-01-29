var GemController = function(pixelLog) {
    this.pixelLog = pixelLog;
    this.gem;
    this.createGem();
}

GemController.prototype = {

    createGem: function() {
        
        var point = this.pixelLog.getRandomPixel()[0]

        this.gem = (new Gem(point));
        
    },

    getGem: function() {
        return this.gem;
    }


}