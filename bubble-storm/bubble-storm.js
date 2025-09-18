let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(114, 209, 198);
  
for (let i = 0; i < bubbles.length; i++) {
  
    bubbles[i].draw();
  bubbles[i].move();
    bubbles[i].bounce();
  }
}

function mousePressed()  {
    
    bubbles.push(new Bubble(mouseX, mouseY));
    
  }

class Bubble {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.velx = random(-2, 2);
    this.vely = random(-2, 2);
  }
  
  bounce() {
    if (this.x <= 0 || this.x >= width) {
      this.velx *= -1;
    }
    
    if (this.y <= 0 || this.y >= height) {
      this.vely *= -1;
    }
  }
  
  move() {
    this.x += this.velx
    this.y += this.vely
  }
  
  draw () {
    fill(31, 77, 113);
    noStroke();
    ellipse (this.x, this. y, 10)
  }
}
