function setup() {
  createCanvas(640, 360)
}

function draw() {
  //p5js.org shapes
  //tegn er rektangle(x-akse. y-akse, brede, hæjde)
  rect(100, 200, 75, 150);

  //tegn en cirkle(x-akse. y-akse, brede, hæjde)
  ellipse(100, 100, 50, 50);

  //tegn en linie(x1, y1, x2, y2)
  line(200, 150, 400, 300);

  //tegn en trekant(x1, y1, x2, y2, x3, y3)
  triangle(300, 50, 250, 100, 250, 200);
}
