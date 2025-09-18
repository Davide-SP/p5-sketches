let baseR, baseG, baseB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 241, 230);
  noStroke();
  frameRate(30);
  
  // scegli un colore "tema" una volta
  baseR = random(100, 200);
  baseG = random(100, 200);
  baseB = random(100, 200);
}

function draw() {
  // variazioni limitate intorno al colore base
  let r = baseR + random(-30, 30);
  let g = baseG + random(-30, 30);
  let b = baseB + random(-30, 30);
  
  // aggiungo alpha per maggiore morbidezza
  fill(r, g, b, 150); 
  circle(mouseX, mouseY, random(20, 40));
}

function mousePressed() {
  // reset sfondo e scegli una nuova palette
  background(245, 241, 230);
  baseR = random(100, 200);
  baseG = random(100, 200);
  baseB = random(100, 200);
}


