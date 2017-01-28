var Snake = function(startingPoint, length, segmentSize) {
    this.position = new Array(length-1);

    this.position[0] = startingPoint;
    
    var delta = new Point(0, segmentSize);

    for (var i=1; i<length-1; i++) {
        this.position[i] = (this.position[i-1]).add(delta);
    }
    this.segmentSize = segmentSize;
    this.direction = 'right'
}

Snake.prototype = {
    changeposition: function(delta) {
        this.position.pop();
        this.position.unshift(this.position[0].add(delta));
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
    }
}