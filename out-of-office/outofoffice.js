let font;
let graphic;


function preload () {
font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup () {
    createCanvas(1200, 600);

    graphic = createGraphics (1200, 600);
    graphic.fill(255);
    graphic.textFont(font);
    graphic.textAlign(CENTER, CENTER);
    graphic.textSize(500);
    graphic.text("ooo", width/2, height/2);
}

function draw () {
    background("#000000")

    const tileSize = 50;

    for (let i = 0; i < 12; i++) {

        // let position = winMouseX / windowWidth;
        let position = frameCount

        // loop over 120 frames
        position = position % 120;

        // if on the back half we want to reverse
        if (position > 60) {
            position = 120 - position;
        }

        // want to make sure it's between 0 and 1
        position = position / 60;

        position = easeInOutCubic(position);

        const sx = 0;
        const sy = tileSize * i * position;
        const sw = 1200;
        const sh = tileSize * position + (600 - tileSize) * (1 - position);

        const dx = 0;
        const dy = tileSize * i;
        const dw = 1200;
        const dh = tileSize;

        image (graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }

    
}

