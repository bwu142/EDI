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

function draw() { //loopty loop


var num = 15; //variable for the number of squares in the array
var sideLen = windowWidth / num; //variable for the side length of each square

for (var y = 0; y < windowWidth; y = y + sideLen) { //loop to create rows in the y-direction

for (var x = 0; x < windowWidth; x = x + sideLen) { //loop to create a row of squares in the x-direction

image (gif, x, y, windowWidth, windowWidth);

}
}
}
