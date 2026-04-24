let x;
const y = 200;
const diameter = 50;
const speed = 3;

function setup() {
  createCanvas(800, 400);
  x = -diameter;
}

function draw() {
  background(26, 26, 46);

  // Draw ball
  noStroke();
  fill(255, 100, 100);
  circle(x, y, diameter);

  // Move ball
  x += speed;

  // Wrap around when it exits the right edge
  if (x > width + diameter) {
    x = -diameter;
  }
}
