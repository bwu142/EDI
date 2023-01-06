function setup() {//runs once
createCanvas (720,720);//creates a canvas that is 720 pixels
background (40,90,155);
}

function draw() {//runs in a loop
fill(150,223,242);//fills grid RGB color
strokeWeight (8);//assigns stroke weight
translate (60,60); //creates a new origin point (60,60)
quad(0,0,
      300,0,
      300,300,
      0,300);

quad(300,0,
      600,0,
      600,300,
      300,300);//add 300 in the x direction

quad(0,300,
      300,300,
      300,600,
      0,600);

quad(300,300,
      600,300,
      600,600,
      300,600);
}
