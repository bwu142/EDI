function setup() {//runs once
    createCanvas (720,720);//creates a canvas that is 720 pixels
    background (100,160,160);
}

function draw() {//runs in a loop
fill(250,223,242);//fills grid RGB color
strokeWeight (8);//assigns stroke weight
translate (60,60); //creates a new origin point (60,60)

for (var y = 0; y < 600; y = y +300 ){
for (var x = 0; x < 600; x = x + 300) {
  quad(x,y,
        x + 300,y,
        x + 300,y + 300,
        x,y + 300);
}
}

}
