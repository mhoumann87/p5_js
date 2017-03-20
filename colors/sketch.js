function setup() {
    createCanvas(640, 360);
}

function draw() {
    //rummand
    background(255);
    ellipseMode(CENTER);
    rectMode(CENTER);

    //krop - rød
    fill(255, 0, 0);
    rect(240, 145, 20, 100);

    //hoved
    fill(0, 0, 255, 100);
    ellipse(240,115,60,60);

    //øjne - grønne
    fill(0, 255, 0);
    ellipse(221, 115, 16, 32);
    ellipse(259, 115, 16, 32);

    //ben
    line(230, 195, 220, 205);
    line(250, 195, 260, 205);
}