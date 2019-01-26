var canvas;

function windowResized(){
    console.log('resized');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(250);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}

