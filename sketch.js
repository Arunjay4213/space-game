var background1;
var scrollSpeed = 10;
var x1 = 0;
var x2;
function preload() {
background1 = loadImage("background1.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
x2 = width;

}


function draw() {
image(background1, x1, 0, width, height);
image(background1, x2, 0, width, height);
x1 -=scrollSpeed;
x2 -=scrollSpeed;
if( x1 <=-width) {
  x1 = width
}
if( x2 <=-width) {
  x2 = width
}

};