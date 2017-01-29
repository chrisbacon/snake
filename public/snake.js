var Snake = function(startingPoint, length, segmentSize, pixelLog) {
    this.position = new Array(length-1);

    this.position[0] = startingPoint;
    this.pixelLog = pixelLog;
    
    var delta = new Point(0, segmentSize);

    for (var i=1; i<length-1; i++) {
        this.position[i] = (this.position[i-1]).add(delta);
    }
    this.segmentSize = segmentSize;
    this.direction = 'right'
}

Snake.prototype = {
    changeposition: function(delta) {
        var end = this.position.pop();
        this.pixelLog.returnPixel(end);
        this.position.unshift(this.position[0].add(delta));
    },

    getHead: function() {
        return this.position[0];
    },

    setDirection: function(direction) {
        switch (direction) {
          case "up":
            if (this.direction === "down") {
                break;
            }
            this.direction = "up";
            break;
          case "down":
            if (this.direction === "up") {
                break;
            }
            this.direction = "down";
            break;
          case "left":
            if (this.direction === "right") {
                break;
            }
            this.direction = "left";
            break;
          case "right":
            if (this.direction === "left") {
                break;
            }
            this.direction = "right";
            break;
        }
    },

    move() {
        switch (this.direction) {
          case "up":
            this.changeposition(new Point(0, -this.segmentSize));
            break;
          case "down":
            this.changeposition(new Point(0, this.segmentSize));
            break;
          case "left":
            this.changeposition(new Point(-this.segmentSize, 0));
            break;
          case "right":
            this.changeposition(new Point(this.segmentSize, 0));
            break;
        }
    },

    addSegment() {
        var l = this.position.length-1;
        var delta = this.position[l-1].subtract(this.position[l]);

        this.position.push(this.position[l].add(delta));
    }
}