function setup(){
canvas = createCanvas(700, 550);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video, 0, 0, 700, 550);
}