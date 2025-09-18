let on = false;
let x = 200
let dist = x/2

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  stroke (255, 229, 180);
  if (on) {
    background (255, 229, 180);
    stroke (0);
    fill(255, 140, 122);
  } else {
    background (255, 140, 122);
    stroke (0);
  }
  
  if (mouseX > (windowWidth/2 - dist) && mouseX < (windowWidth/2 + dist) && mouseY > 
			(windowHeight/2 - dist) && mouseY < (windowHeight/2 + dist)) {
    
    fill (184, 225, 160);
  }
  
  
  strokeWeight (3);
  rect(windowWidth/2, windowHeight/2, x);
  fill(255, 229, 180);
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
