
const vortexRadius = 35
function drawVortex(parentX, parentY) {
  // Random RGB values
  let randR = random(0, 255);
  let randG = random(0, 255);
  let randB = random(0, 255);

  // Parent circle
  let parentRadius = vortexRadius;
  fill(randR, randG, randB);
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
    randR = random(0, 255);
    randG = random(0, 255);
    randB = random(0, 255);

    // Calculate the horizontal and vertical steps to position child
    let angle = radians(randAngle);
    let hypotenuse = parentRadius - childRadius;
    let stepX = hypotenuse * cos(angle);
    let stepY = hypotenuse * sin(angle);

    // Child circle (random radius and color)
    let childX = parentX + stepX;
    let childY = parentY + stepY;
    fill(randR, randG, randB);
    circle(childX, childY, childRadius * 2);

    // Update variables
    parentX = childX;
    parentY = childY;
    parentRadius = childRadius;
  }
}

function setup() {
  createCanvas(1000, 900);
  noLoop();
}

function draw() {
  background(255);

  let xStep = 70; // Distance between circles
  let noiseScale = 0.002; // Adjusts how "curvy" or "stretched" the wave is
  let amplitude = 800; // The height of the curves

  fill(0, 150, 255);
  noStroke();

  for (let x = 0; x <= width; x += xStep) {
    // noise() returns a value between 0 and 1
    // We multiply by amplitude and add an offset to center it vertically
    let y = noise(x * noiseScale) * amplitude + (height / 2 - amplitude / 2);

    drawVortex(x, y, vortexRadius);
  }
}


// function draw() {
//   background(255);

//   let startXOffset = vortexRadius;
//   let currentY = 0;
//   let startX = random(0 + startXOffset, width - startXOffset + 1);
//   let totalSegments = 3;
//   let segmentHeight = height / totalSegments;

//   for (let i = 0; i < totalSegments; i++) {
//     // Anchor points
//     let anchorX1 = startX;
//     let anchorY1 = currentY;
//     let anchorX2 = startX;
//     let anchorY2 = currentY + segmentHeight;

//     // This calculates the max possible swing to the left and right
//     let maxLeft = -startX;
//     let maxRight = width - startX;

//     // Now random will only pick values that stay inside the canvas
//     let controlX1 = anchorX1 + random(maxLeft, maxRight);
//     let controlX2 = anchorX2 + random(maxLeft, maxRight);

//     // Control points
//     // let controlX1 = anchorX1 + random(-400, 400);
//     let controlY1 = anchorY1 + segmentHeight * 0.33; // 1/3 way down
//     // let controlX2 = anchorX2 + random(-400, 400);
//     let controlY2 = anchorY2 - segmentHeight * 0.33; // 2/3 way down

//     // Draw vortexes
//     drawVortexesAlongCurve(
//       anchorX1,
//       anchorY1,
//       controlX1,
//       controlY1,
//       controlX2,
//       controlY2,
//       anchorX2,
//       anchorY2,
//     );

//     currentY += segmentHeight; // Move to where the next segment starts where this one ends
//   }
// }

// function drawVortexesAlongCurve(x1, y1, cx1, cy1, cx2, cy2, x2, y2) {
//   fill(0);
//   noStroke();
//   // t is the distance between the vortexes (each step represents a position along the curve)
//   for (let t = 0; t <= 1; t += 0.4) {
//     let bezierX = bezierPoint(x1, cx1, cx2, x2, t);
//     let bezierY = bezierPoint(y1, cy1, cy2, y2, t);
//     drawVortex(bezierX, bezierY);
//   }
// }
