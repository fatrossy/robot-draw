function setup() {
  createCanvas(600,600);
  background(220,220,220);
  strokeWeight(2);
}

function draw() {
  //Neck
line(300,200,300,300);
line(285,200,285,300);
line(315,200,315,300);

//hair
line(300, 170, 260, 110);
line(300, 170, 330, 50);
line(300, 170, 390, 190);

//head
//black circle
noStroke();
fill("black");
ellipse(300,170,120,120);
//white circle
fill("white");
ellipse(320,160,40,40);
//black dot in eye
fill("black");
ellipse(320,160,7,7);
fill("grey");
ellipse(285,155,15,15);
ellipse(330,134,12,12);
ellipse(340,178,8,8);

//leg
ellipse(285, 460, 100, 100);

//body
fill("black");
rectMode(CENTER);
rect(285,380,120,160);
fill("grey");
rectMode(CENTER);
rect(285,320,120,15);
}