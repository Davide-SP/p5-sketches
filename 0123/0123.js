let font;
let graphic1;
let graphic2;

function preload () {
font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup () {
    createCanvas(500, 500);

    graphic1 = createGraphics(500, 500);

    // graphic1.background("#ecf072");
    graphic1.textFont(font);
    graphic1.textSize(400);
    graphic1.textAlign(CENTER, CENTER);
    graphic1.fill("#ef5236")
    graphic1.text("01", width / 2, height / 2);

    graphic2 = createGraphics(500, 500);

    graphic2.textFont(font);
    graphic2.textSize(400);
    graphic2.textAlign(CENTER, CENTER);
    graphic2.fill("#ef5236")
    graphic2.text("23", width / 2, height / 2);

}

function draw () {
    background("#ecf072")
// 0.05 indica la velocità, mentre 250 l'ampiezza del movimento
    let val = sin(frameCount * 0.02) * 250;

    // copy(graphic2, 0, 0, 500, 500, 0, 0, 500, 500);
    // copy(graphic1, 250 - val , 0, 500, 500, 250 - val, 0, 500, 500);

    // soluzione proposta
    
    copy(graphic1, 250 + val ,  0, 250 - val, 500, 250 + val, 0, 250 - val, 500);
    copy(graphic2, 0, 0, 250 + val, 500, 0, 0, 250 + val, 500);
    
}