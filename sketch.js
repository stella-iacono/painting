function setup() {
  createCanvas(550, 560);
  noLoop();
  textOutput();
}

function draw() {

  //background color
  background(180, 170, 140); 


 
  //color
  noStroke();
  fill(158, 179, 205);
  ellipse(50, 150, 200, 300);
  fill(0, 26, 153);
  triangle(80, 160, 77, 250, 140, 255);
  fill(158, 179, 205);
  ellipse(450, 100, 140, 100);  
  fill(200, 50, 50);
  ellipse(470, 130, 80, 60);
  fill(40, 100, 40);
  ellipse(540, 250, 80, 80);
  fill(167, 175, 214);
  circle(400, 250, 49);
  fill(0, 26, 153);
  triangle(560, 490, 560, 560, 490, 560);


  //left semi
  stroke(2);
  fill(180, 170, 140);
  arc(0, 250, 160, 400, PI, 0, CHORD);
  noStroke();
  fill(200, 50, 50);
  ellipse(50, 144, 22, 72);


  //circle
  stroke(2);
  noFill();
  circle(45, 230, 70);
  noStroke();
  fill(167, 175, 214);
  circle(45, 230, 40);

  stroke(2);
  //big red
  fill(138, 41, 30);
  rect(0, 250, 180, 250);

  //base
  fill(0, 78, 45);
  quad(0, 560, 400, 560, 250, 460, 0, 460);

  //trapezoid
  noFill();
  quad(430, 150, 550, 5, 550, 560, 430, 560);

  // square yellow
  fill(246, 223, 105);
  rect(80, 250, 110, 110);

  // brown
  fill(80, 50, 30);
  rect(170, 360, 80, 100);


  // green
  fill(40, 100, 40);
  rect(130, 360, 40, 100);

  // pink
  fill(220, 137, 161);
  quad(250, 360, 280, 360, 280, 480, 250, 460);

  // orange
  fill(200, 80, 50);
  triangle(130, 360, 170, 360, 130, 325);

  // blue
  fill(66, 21, 176);
  triangle(280, 360, 250, 360, 280, 325);

  //black
  fill(0);
  rect(400, 180, 30, 40);

  //small yellow
  fill(246, 223, 105);
  rect(430, 220, 40, 43);

  //big yellow
  fill(245, 223, 105);
  rect(367, 263, 63, 95);

  //big green
  fill(40, 100, 40);
  rect(430, 358, 50, 80);

  //red
  fill(200, 50, 50);
  rect(380, 438, 50, 160);

  //balloon strings
  line(275, 150, 275, 300);
  line(255, 150, 255, 220);

  //balloon crosses
  line(275, 150, 255, 220);
  line(255, 150, 275, 220);

  //semicircle
  fill(0);
  arc(265, 220, 20, 20, 0, PI, CHORD);

  //dot
  fill(0);
  circle(275, 300, 5);

  //tree
  stroke(97, 60, 0);
  strokeWeight(3);
  line(10, 100, 5, 250);
  line(10, 160, 40, 145);
  line(10, 145, 45, 110);
  line(8, 160, 0, 155);
  line(8, 150, 0, 140);

  // balloon
  stroke(0);
  strokeWeight(2);

  fill(200, 50, 50);
  circle(260, 100, 120);




  filter(BLUR, 5);


  for (let i = 0; i < 10000; i++) { // Many tiny dabs for texture
    let x = random(width);
    let y = random(height);
    let n = noise(x * 0.01, y * 0.01) * 100;

    let r = 18 + n;
    let g = 18 + n * 0.8;
    let b = 18 + n * 0.6;

    fill(r, g, b, 180);
    noStroke();
    rect(x, y, random(1, 3), random(1, 4)); // Small, layered paint blobs
  }

  filter(BLUR, 1);

  //left semi
  strokeWeight(1);
 stroke(1);
  arc(0, 250, 160, 400, PI, 0, CHORD);

 




  //big red
  noStroke(),
  rect(0, 250, 180, 250);

  stroke(1);
  quad(0, 560, 400, 560, 250, 460, 0, 460);

  //trapezoid
  noFill();
  quad(430, 150, 550, 5, 550, 560, 430, 560);

  // square yellow

  rect(80, 250, 110, 110);

  // brown

  rect(170, 360, 80, 100);


  // green

  rect(130, 360, 40, 100);

  // pink

  quad(250, 360, 280, 360, 280, 480, 250, 460);

  // orange

  triangle(130, 360, 170, 360, 130, 325);

  // blue

  triangle(280, 360, 250, 360, 280, 325);

  //black

  rect(400, 180, 30, 40);

  //small yellow

  rect(430, 220, 40, 43);

  //big yellow

  rect(367, 263, 63, 95);

  //big green
 
  rect(430, 358, 50, 80);

  //red

  rect(380, 438, 50, 160);

  //balloon strings
  line(275, 150, 275, 300);
  line(255, 150, 255, 220);

  //balloon crosses
  line(275, 150, 255, 220);
  line(255, 150, 275, 220);

  //semicircle
  fill(0);
  arc(265, 220, 20, 20, 0, PI, CHORD);

  //dot
  fill(0);
  circle(275, 300, 5);

  //tree
  stroke(97, 60, 0);
  strokeWeight(3);
  line(10, 100, 5, 250);
  line(10, 160, 40, 145);
  line(10, 145, 45, 110);
  line(8, 160, 0, 155);
  line(8, 150, 0, 140);

  // balloon
  stroke(0);
  strokeWeight(2);

  noFill();
  circle(260, 100, 120);

  filter(BLUR, 1);
  
  for (let i = 0; i < 10000; i++) { // Many tiny dabs for texture
    let x = random(width);
    let y = random(height);
    let n = noise(x * 0.01, y * 0.01) * 100;

    let r = 18 + n;
    let g = 18 + n * 0.8;
    let b = 18 + n * 0.6;

    fill(r, g, b, 180);
    noStroke();
    rect(x, y, 1, 1); // Small, layered paint blobs
  }










}
