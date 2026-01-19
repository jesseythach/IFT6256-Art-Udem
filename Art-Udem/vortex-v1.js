let step = 0;
function setup() {
  createCanvas(800, 500);
}

function draw() {
  noLoop();
  background("white");
  noFill();
  rect(0, 0, 800, 500);

  // Parent circle
  let parent_x = 400;
  let parent_y = 250;
  let parent_radius = 150;
  fill(200, 0, 0);
  circle(parent_x, parent_y, parent_radius * 2);

  // Loop for 3 circles
  for (let i = 0; i < 3; i++) {
    let rand_angle = random(0, 360); // Select a random angle

    // Calculate the horizontal and vertical steps to position child
    let angle = radians(rand_angle);
    let hypotenuse = parent_radius / 2;
    let x_step = hypotenuse * cos(angle);
    let y_step = hypotenuse * sin(angle);

    // Child circle (diameter half of its parent)
    let child_x = parent_x + x_step;
    let child_y = parent_y + y_step;
    circle(child_x, child_y, parent_radius);

    // Update variables
    parent_x = child_x;
    parent_y = child_y;
    parent_radius /= 2;
  }
}
