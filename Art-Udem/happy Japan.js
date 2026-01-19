let step = 0;
function setup() {
  createCanvas(800, 500);
}

function draw() {
  background("white");
  noFill();
  stroke(0);
  rect(0, 0, 800, 500);

  let height = Math.sin(step) * 50 + 250;
  
  fill(200, 0, 0);
  noStroke();
  circle(400, height, 300);
  fill("white");

  // Increment step
  step += 0.15;
  if (step > Math.PI * 2) {
    step = 0;
  }
}
