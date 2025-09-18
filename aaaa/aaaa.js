let font;
let graphic;

function preload () {
font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup () {
    createCanvas(600, 600);
    graphic = createGraphics(600, 600);

    graphic.fill("#f3c043")
    graphic.textFont(font);
    graphic.textAlign(CENTER, CENTER);
    graphic.textSize(800);
    graphic.text("a", width/2, height/2);

}

function draw () {
    background("#e84e3c")

    const tileSize = 50;

    for(let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {

            //source (originale)

            // const sx = 0;
            // const sy = 0;
            // const sw = 600;
            // const sh = 600;

            const distortion = sin(frameCount * 0.05 + i * 0.2 + j * 0.1) * 50;

            //source (rimappata)

            const sx = i * tileSize  + distortion;
            const sy = j * tileSize;
            const sw = tileSize;
            const sh = tileSize;


            // destination

            let dx = i * tileSize;
            let dy = j * tileSize;
            let dw = tileSize;
            let dh = tileSize;

            // image ha i parametri invertiti rispetto a copy
            image(graphic, dx, dy, dw, dh, sx, sy, sw, sh); 
        }
        
    }
    // copy(graphic, 0, 0, 600, 600, 0, 0, 300, 600);
    // copy(graphic, 0, 0, 600, 600, 300, 0, 300, 600);
}