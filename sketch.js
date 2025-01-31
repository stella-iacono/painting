let drops = [];
let balloonY;
let speed = 0.2;
let bounceRange = 5;
let startingPosition = 110;


function setup() {
    createCanvas(550, 560);
    for (let i = 0; i < 100; i++) {
        drops.push(new Raindrop());
    }
    balloonY = startingPosition;
}

function draw() {
    background(180, 170, 140);

    for (let drop of drops) {
        drop.fall();
        drop.show();
    }

    balloonY += speed;

    if (balloonY > startingPosition + bounceRange || balloonY < startingPosition - bounceRange) {
        speed *= -1;
    }

    //left semi
    stroke(2);
    fill(200, 50, 50);
    arc(0, 250, 160, 400, PI, 0, CHORD);

    //blue circle
    noStroke();
    fill(167, 175, 214);
    circle(45, 230, 40);

    //big red
    stroke(2);
    fill(138, 41, 30);
    rect(0, 250, 180, 250);

    //base
    fill(0, 78, 45);
    quad(0, 560, 400, 560, 250, 460, 0, 460);

    //trapezoid
    fill(21, 22, 79, 100);
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
    line(275, balloonY, 275, balloonY + 200);
    line(255, 150, 255, 220);

    //balloon crosses
    line(275, 150, 255, 220);
    line(255, 150, 275, 220);

    //semicircle
    fill(0);
    arc(265, 220, 20, 20, 0, PI, CHORD);

    //dot
    fill(0);
    // circle(275, 300, 5);
    circle(275, balloonY + 200, 5);

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
    circle(260, balloonY, 100, 200);


}

class Raindrop {
    constructor() {
        this.x = random(width); // Random x position
        this.y = random(-200, 0); // Start off-screen
        this.length = random(10, 20);
        this.speed = random(2, 5);
    }

    fall() {
        this.y += this.speed; // Move down
        if (this.y > height) {
            this.y = random(-200, 0); // Reset raindrop to top
        }
    }

    show() {
        stroke(0, 0, 255);
        line(this.x, this.y, this.x, this.y + this.length);
    }
}

