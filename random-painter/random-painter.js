let x, y, r, g, b, a, rg;
rg = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (245, 241, 230);
}

function draw() {
  
x = random(width);
y = random(height);
r = random(50, 255);
g = random(50, 255);
b = random(50, 255);
// a = random (1, 10);
noStroke();
fill (r, g, b);
circle(mouseX, mouseY, random(20, 70))
}

function mousePressed() {
  background (245, 241, 230);
}
