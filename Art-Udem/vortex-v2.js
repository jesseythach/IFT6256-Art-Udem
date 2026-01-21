function setup() {
  createCanvas(1000, 750);
  noLoop();
  colorMode(HSB);
}

const vortexRadius = 45;

function drawVortex(parentX, parentY) {
  // Random HSB values
  let hue = random(0, 360);
  let sat = 80;
  let bri = 85;

  // Parent circle
  let parentRadius = vortexRadius;
  fill(hue, sat, bri);
  circle(parentX, parentY, parentRadius * 2);

  // Child circle
  let childRadius;
  let childMinProp = 0.6;
  let childMaxProp = 0.9;
  let nbChild = random(2, 11);

  // Loop for nb_child circles
  for (let i = 0; i < nbChild; i++) {
    childRadius = random(
      parentRadius * childMinProp,
      parentRadius * childMaxProp,
    ); // Select a random radius for child
    let randAngle = random(0, 360); // Selects a random angle
    hue = random(0, 360);
    sat = 80;
    bri = 85;

    // Calculate the horizontal and vertical steps to position child
    let angle = radians(randAngle);
    let hypotenuse = parentRadius - childRadius;
    let stepX = hypotenuse * cos(angle);
    let stepY = hypotenuse * sin(angle);

    // Child circle (random radius and color)
    let childX = parentX + stepX;
    let childY = parentY + stepY;
    fill(hue, sat, bri);
    circle(childX, childY, childRadius * 2);

    // Update variables
    parentX = childX;
    parentY = childY;
    parentRadius = childRadius;
  }
}

function colorGreenRect() {
  let hue = random(95, 150);
  let sat = random(25, 35);
  let bri = random(80, 100);
  let alpha = 80;
  fill(hue, sat, bri, alpha);
}

function drawRectangles() {
  // Random number between 0 and 1 (exclusive)
  let h1 = random();
  let h2 = random();
  let h3 = random();
  let total = h1 + h2 + h3;

  // Normalize
  h1 = (h1 / total) * height;
  h2 = (h2 / total) * height;
  h3 = (h3 / total) * height;

  let y = 0;
  colorGreenRect();
  rect(0, y, width, h1);
  y += h1;
  colorGreenRect();
  rect(0, y, width, h2);
  y += h2;
  colorGreenRect();
  rect(0, y, width, h3);
}

function drawCurve() {
  let incrementY = 5; // Increment in y
  let noiseScale = 0.002; // Adjust curviness
  let amplitude = width;
  let gapSquared = (vortexRadius * 2.1) ** 2; // Squared distance between two vortexes
  let prevX = 0;
  let prevY = 0;

  for (let y = 0; y <= height; y += incrementY) {
    // Multiply by amplitude and add an offset to center it horizontally
    let x = noise(y * noiseScale) * amplitude - amplitude / 2 + width / 2;

    // Draw vortex if gap is large enough
    if ((x - prevX) ** 2 + (y - prevY) ** 2 > gapSquared) {
      drawVortex(x, y, vortexRadius);
      prevX = x;
      prevY = y;
    }
  }
}

function draw() {
  background(255);
  noStroke();

  drawRectangles();
  drawCurve();
}
