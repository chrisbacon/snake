window.onload = function() {
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    context.fillStyle = 'deepskyblue';
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = 'red';
    context.fillRect(60, 60, 50, 50);

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(10, 110);
    context.lineTo(110, 110);
    context.lineTo(110, 10);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(300, 200);
    context.lineTo(200, 300);
    context.lineTo(400, 300);
    context.closePath();
    context.stroke();

    var drawCircle = function(x, y) {
        context.beginPath();
        context.arc(x, y, 5, 0, 2*Math.PI);
        context.stroke();
    }

    var colourPicker = document.querySelector('input')

    colourPicker.onchange = function() {
        console.log(this.value);
        context.strokeStyle = this.value;
    }
    
    var img = document.createElement('img');
    img.src = "https://pbs.twimg.com/profile_images/496779421031084032/GvXg57Cb_reasonably_small.jpeg"
    img.onload = function() {
        context.drawImage(img, 350, 350, 128, 128);
    }

    canvas.onclick = function(event) {
        console.log("you clicked the canvas at", event.x, event.y)


        drawCircle(event.x + window.scrollX, event.y + window.scrollY);
    }
}