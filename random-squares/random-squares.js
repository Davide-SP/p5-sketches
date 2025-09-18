let x = 50;
let y = 50;
let w = 50;
let gap = 100;
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(19,55,172);
  
  
  noFill();
  stroke(248, 215, 77);
  strokeWeight(2);
  
  for (let i=0; i < width; i++) {
    for (let j=0; j < width; j++) {
       rect ((x + gap * i), (x + gap * j), w);
      
      if (random(0,100) > 50) {
     rect ((x + gap * i)+8, (x + gap * j)+8, w-16);
  }
    }
    
   }
 

}
