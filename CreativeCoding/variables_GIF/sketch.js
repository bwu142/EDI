//Create a program that enables us to customize the number of squares in a grid

let gif;

function preload (){
  gif = loadImage('assets/FinalGifAnimation.gif');

}


function setup() { //runs once
  createCanvas(windowWidth, windowWidth);
  fill(250,223,242);
  strokeWeight(1);
}
  createCanvas(windowWidth, windowWidth); //creates a canvas 720px by 720px



function draw() { //runs in a loop
background(50, 145, 168); //background color
//fill ():
//strokeWeight (1);

var num = 15; //variable for the number of squares in the array (30?)
var sideLen = windowWidth / num; //variable for the side length of each square

translate (-100, -100); //translation creates a bleed effect

for (var y = 0; y < 2 * windowWidth; y = y + sideLen) { //loop to create rows in the y-direction
for (var x = 0; x < 2 * windowWidth; x = x + sideLen) { //loop to create a row of squares in the x-direction

image (gif, x, y, windowWidth/num, windowWidth/num);

}
}
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}
