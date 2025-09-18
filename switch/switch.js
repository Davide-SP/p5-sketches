let on = false;
let x = 100
let dist = x/2

function setup() {
  createCanvas(windowWidth, windowHeight);
frameRate(30);
}

function draw() {
  
  noStroke();
  if (on) {
    background (255, 209, 102);
    fill (239, 71, 111);
    
  } else {
    background (239, 71, 111);
  }
  
  if (mouseX > (windowWidth/2 - dist) && mouseX < (windowWidth/2 + dist) && mouseY > 
			(windowHeight/2 - dist) && mouseY < (windowHeight/2 + dist)) {
    
    fill (6, 214, 160);
  }
  
  
  rect(windowWidth/2, windowHeight/2, x);
  fill(255, 209, 102);
  rectMode (CENTER);
}

function mousePressed () {
  if (mouseX > (windowWidth/2 - dist) && mouseX < (windowWidth/2 + dist) && mouseY > 
			(windowHeight/2 - dist) && mouseY < (windowHeight/2 + dist)) {
    
     on = !on
    
    // if (on) {
    //   on = false
    // } else {
    //   on = true
    // }
  }
  
  
}



