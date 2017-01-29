var GemController = function(pixelLog) {
    this.pixelLog = pixelLog;
    this.gems = [];
}

GemController.prototype = {

    createGem: function() {
        if (Math.random() < 0.2) {
            var point = this.pixelLog.getRandomPixel()[0]

            this.gems.push(new Gem(point));
        }
    },

    getGems: function() {
        return this.gems;
    }


}