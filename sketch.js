let x;
const y = 200;
const baseSize = 25;
const speed = 3;

function setup() {
  createCanvas(800, 400);
  x = -baseSize * 2;
}

function draw() {
  background(26, 26, 46);

  const pulse = baseSize + sin(frameCount * 0.1) * 8;

  noStroke();
  fill(255, 100, 100);
  hexagon(x, y, pulse);

  x += speed;

  if (x > width + baseSize * 2) {
    x = -baseSize * 2;
  }
}

function hexagon(cx, cy, r) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    const angle = TWO_PI / 6 * i - PI / 6;
    vertex(cx + cos(angle) * r, cy + sin(angle) * r);
  }
  endShape(CLOSE);
}
