let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(112, 204, 245);
}

function draw() {
  
  walker.show();
  walker.walk();
}

class Walker {
  // Objects have a constructor where they are initialized.
  constructor() {
    // Objects have data.
    this.x = width/2;
    this.y = height/2;
    this.d = 20;
    frameRate(30);
  
  }
  
  show () {
    fill(89, 172, 248);
    stroke(85, 70, 206);
    circle(this.x, this.y, this.d);
  }
  
  walk () {
    const odd = random(1);
    
    let xstep = 2;
    let ystep = 2;
    
  if (odd < 0.5) {
    
    if (mouseX > this.x) {
      this.x += xstep
    } else {
      this.x -= xstep
    }
    
     if (mouseY > this.y) {
      this.y += ystep
    } else {
      this.y -= ystep
    }
 
  } else {
      // 50% di probabilità di movimento casuale
      this.x += floor(random(-1, 2)) * xstep;
      this.y += floor(random(-1, 2)) * ystep;
    
  }
  
} 
  
}

