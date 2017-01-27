var Snake = function(segmentSize) {
    this.location = [new Point(30, 30), new Point(30, 32), new Point(30, 34), new Point(30, 36)];
    this.segmentSize = segmentSize;
    this.direction = 'right'
}

Snake.prototype = {
    changeLocation: function(delta) {
        
        for (var i=1; i < this.location.length; i++) {
            this.location[i].x = this.location[i-1].x;
            this.location[i].y = this.location[i-1].y;
        }
        this.location[0].add(delta);
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
            snake.changeLocation(new Point(0, -this.segmentSize));
            break;
          case "down":
            snake.changeLocation(new Point(0, this.segmentSize));
            break;
          case "left":
            snake.changeLocation(new Point(-this.segmentSize, 0));
            break;
          case "right":
            snake.changeLocation(new Point(this.segmentSize, 0));
            break;
        }
    }
}