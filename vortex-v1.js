function setup() {
  createCanvas(800, 500);
}

function draw() {
  noLoop();
  background("white");
  noFill();
  rect(0, 0, 800, 500);

  // Random RGB values
  let randR = random(0, 255);
  let randG = random(0, 255);
  let randB = random(0, 255);

  // Parent circle (random color)
  let parentX = 400;
  let parentY = 250;
  let parentRadius = 150;
  noStroke()
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
    noStroke()
    fill(randR, randG, randB);
    circle(childX, childY, childRadius * 2);

    // Update variables
    parentX = childX;
    parentY = childY;
    parentRadius = childRadius;
  }
}
