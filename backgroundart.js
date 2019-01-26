var canvas;

function windowResized(){
    console.log('resized');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(10);

}

function draw() {
  background('#f5f5dc');
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
}

