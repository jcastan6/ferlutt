var canvas;

function windowResized(){
    console.log('resized');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(10);
  stroke('#FFFFFF');
}

function draw() {
  background('#000000');
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}

