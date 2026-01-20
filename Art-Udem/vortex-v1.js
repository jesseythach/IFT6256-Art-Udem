function setup() {
  createCanvas(800, 500);
}

function draw() {
  noLoop();
  background("white");
  noFill();
  rect(0, 0, 800, 500);

  // Parent circle
  let parentX = 400;
  let parentY = 250;
  let parentRadius = 150;
  fill(200, 0, 0);
  circle(parentX, parentY, parentRadius * 2);

  // Loop for 3 circles
  for (let i = 0; i < 3; i++) {
    let randAngle = random(0, 360); // Select a random angle

    // Calculate the horizontal and vertical steps to position child
    let angle = radians(randAngle);
    let hypotenuse = parentRadius / 2;
    let stepX = hypotenuse * cos(angle);
    let stepY = hypotenuse * sin(angle);

    // Child circle (diameter half of its parent)
    let childX = parentX + stepX;
    let childY = parentY + stepY;
    circle(childX, childY, parentRadius);

    // Update variables
    parentX = childX;
    parentY = childY;
    parentRadius /= 2;
  }
}
