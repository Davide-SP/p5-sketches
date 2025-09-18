let angle = 0;
let x = 100;
let direction = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);
 
}

function draw() {
  background(244, 212, 207);
  
  translate (windowWidth/2, windowHeight/2);
  

  rotate(angle * direction);
  
  rectMode(CENTER);
  fill(227, 97, 77);
  noStroke();
  rect (0, 0, mouseX);
  
  angle += 1
  x += 1 * direction; // Incrementa x in base alla direzione
  
  
  if (x > width || x < 0) {
    angle = 0;
    direction *= -1; // Inverti la direzione della rotazione
  }
}
