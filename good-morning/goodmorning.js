let font;
let graphic;

const waveInput = document.querySelector("input.wave");
const dxInput = document.querySelector("input.dx");
const dyInput = document.querySelector("input.dy");

const line1Input = document.querySelector("input.line1");
const line2Input = document.querySelector("input.line2");

function preload () {
font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup () {
    createCanvas(1200, 600);
    createCopy();
}

function draw () {
    background("#FFFDD7")

    const tileSize = 10;

    

    for (let i = 0; i < 120; i++) {
        for (let j = 0; j < 60; j++) {

            const wave = waveInput.value;

            const distortionX = sin(frameCount * wave + i * 0.5 + j * 0.1) * dxInput.value;
            const distortionY = sin(frameCount * wave + i * 0.5 + j * 1) * dyInput.value;

            const sx = i * tileSize + distortionX;
            const sy = j * tileSize + distortionY;
            const sw = tileSize;
            const sh = tileSize;
        
            const dx = i * tileSize;
            const dy = j * tileSize;
            const dw = tileSize;
            const dh = tileSize;

            image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
        }
    }
    
}

function createCopy() {

    graphic = createGraphics(1200, 600);

    const text = line1Input.value + "\n" + line2Input.value;

    graphic.fill("#ff0000")
    graphic.textAlign(CENTER, CENTER);
    graphic.textFont(font);
    graphic.textSize(250);
    graphic.textLeading(230);
    graphic.text(text, width/2, height/2);
}

line1Input.addEventListener("input", function() {
    createCopy();
})

line2Input.addEventListener("input", function() {
    createCopy();
})
