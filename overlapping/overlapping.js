let bubbles = [];

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.active = false; // stato acceso/spento
  }

  intersects(other) { 
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  show() {
    strokeWeight(2);
    stroke(95, 90, 166); // bordo viola/blu scuro

    if (this.active) {
      fill(95, 90, 166); // viola scuro pieno quando si sovrappongono
    } else {
      fill(244, 199, 116);
    }

    ellipse(this.x, this.y, this.r * 2);
  }

  changeColor(state) { 
    this.active = state;
  }

  move() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(244, 199, 116); // sfondo giallo sabbia

  for(let b of bubbles) {
    b.show();
    b.move();

    let overlapping = false;

    for(let other of bubbles) {
      if(b != other && b.intersects(other)) {
        overlapping = true;
      }
    }

    b.changeColor(overlapping); // acceso se sovrapposta, spento altrimenti
  }
}

