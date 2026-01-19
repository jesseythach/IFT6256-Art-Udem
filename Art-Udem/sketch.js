let step = 0;
function setup() {
  createCanvas(800, 500);
}

function draw() {
  noLoop();
  background("white");
  noFill();
  rect(0, 0, 800, 500);

  // Random RGB values
  let rand_r = random(0, 255);
  let rand_g = random(0, 255);
  let rand_b = random(0, 255);

  // Parent circle (random color)
  let parent_x = 400;
  let parent_y = 250;
  let parent_radius = 150;
  fill(rand_r, rand_g, rand_b);
  circle(parent_x, parent_y, parent_radius * 2);

  // Child circle
  let child_radius;
  let min_child_prop = 0.6;
  let max_child_prop = 0.9;
  let nb_child = random(2, 11);

  // Loop for nb_child circles
  for (let i = 0; i < nb_child; i++) {
    child_radius = random(
      parent_radius * min_child_prop,
      parent_radius * max_child_prop,
    ); // Select a random radius for child
    let rand_angle = random(0, 360); // Selects a random angle
    rand_r = random(0, 255);
    rand_g = random(0, 255);
    rand_b = random(0, 255);

    // Calculate the horizontal and vertical steps to position child
    let angle = radians(rand_angle);
    let hypotenuse = parent_radius - child_radius;
    let x_step = hypotenuse * cos(angle);
    let y_step = hypotenuse * sin(angle);

    // Child circle (random radius and color)
    let child_x = parent_x + x_step;
    let child_y = parent_y + y_step;
    fill(rand_r, rand_g, rand_b);
    circle(child_x, child_y, child_radius * 2);

    // Update variables
    parent_x = child_x;
    parent_y = child_y;
    parent_radius = child_radius;
  }
}
