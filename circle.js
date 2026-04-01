function drawCircle() {  // This is the function that draws the circle in the middle of the canvas. It also handles the morphing effect when the mouse is pressed and released.
  const elapsed = millis() - lastTime;

  push();
  rotate(45);
  for (let i = 0; i < 3; i++) { // Draw the 2 lines that form the "X" shape inside the circle. These lines will also morph when the mouse is pressed and released, creating a dynamic effect.
    stroke(a1);
    rotate(90);
    line(0, -circleWidth50, 0, circleWidth50); 
  }
  pop();
  
  push();
  noFill();
  strokeWeight(.5);

  if (mouseIsPressed) { // When the mouse is pressed, the circle will morph into a larger shape, creating a dynamic effect. The morphing is achieved by drawing circles of increasing size based on the elapsed time since the last mouse press.
    if (elapsed > 1000) {
      stroke('white');
      circle(0, 0, circleWidth100 * 1.5);
    }
    if (elapsed > 500) {
      stroke(150, 150, 150);
      circle(0, 0, circleWidth100);
    }
    if (elapsed > 100) {
      stroke(100, 100, 100);
      circle(0, 0, circleWidth50);
    }
  } 
  if (!mouseIsPressed) {
    if (elapsed > 1000) {
      stroke('white');
      circle(0, 0, circleWidth100 * 1.5);
    }
    if (elapsed > 500) {
      stroke(150, 150, 150);
      circle(0, 0, circleWidth100);
    }
    if (elapsed > 100) {
      stroke(100, 100, 100);
      circle(0, 0, circleWidth50);
    }
  }
  pop(); 
}
