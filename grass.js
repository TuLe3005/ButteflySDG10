// draw animated grass elements 
// Functions:
//   - drawGrass(): Calls all grass drawing functions to render layered grass.
//   - drawGrass1(), drawGrass2(), drawGrass3(): Draw different grass shapes with gradients and animation.//
function drawGrass() {
    push();
    drawGrass1(255);
  pop();

  push();
  drawGrass3(10); 
  pop();

  push();
    drawGrass2(10);
  pop();
}

function drawGrass1(opacity = 255) {
  let c1WithAlpha = color(red(c1), green(c1), blue(c1), opacity);
  let c2WithAlpha = color(red(c2), green(c2), blue(c2), opacity);
  let grad = drawingContext.createLinearGradient(0, height, 0, 0);
  
    grad.addColorStop(0, c1WithAlpha.toString());
    grad.addColorStop(0.5, c1WithAlpha.toString());
    grad.addColorStop(1, c2WithAlpha.toString());
    drawingContext.fillStyle = grad; 

  beginShape();
  noStroke(); 
  vertex(width/2 + 20, height); 
  quadraticVertex(width/2 -40 + wind*2, height/2 +  300, width/2 - 8, height/2); 
  quadraticVertex(width/2 + 80+ wind, height/12 - 100 + wind*4, width/2 + 250, 0);
  quadraticVertex(width/2 + 300 + wind*2, 0 + wind*2, width/2 + 250, 0); 
  vertex(width/2 + 300, 0 + wind);
  quadraticVertex(width/2 + 80+ wind*2, height/12 - 100 + wind, width/2 + 15, height/2); 
  quadraticVertex(width/2 -10 + wind*2, height/2 + 300, width/2 + 50, height);
  endShape(CLOSE);
}

function drawGrass2(opacity = 255) {
  let c1WithAlpha = color(red(c1), green(c1), blue(c1), opacity);
  let c2WithAlpha = color(red(c2), green(c2), blue(c2), opacity);
  let grass2TopY = height/2 + height/10;
  let grass2BottomY = height;
  let grad = drawingContext.createLinearGradient(0, grass2BottomY, 0, grass2TopY);
  
    grad.addColorStop(0, c1WithAlpha.toString());
    grad.addColorStop(0.65, c1WithAlpha.toString());
    grad.addColorStop(1, c2WithAlpha.toString());
    drawingContext.fillStyle = grad; 

  noStroke();
  beginShape();
  translate(-44,0); 
  vertex(width/2 + 100, height); 
  quadraticVertex(width/2 + 100+ wind*2, height/2 + height/8 + wind*2,width/2 + width/4, height/2 + height/10); 
  quadraticVertex(width/2 + 150+ wind*2,height/2 + height/8+ wind*2, width/2 + 120, height); 
  endShape(CLOSE);
}

function drawGrass3(opacity = 255) {
  let c1WithAlpha = color(red(c1), green(c1), blue(c1), opacity);
  let c2WithAlpha = color(red(c2), green(c2), blue(c2), opacity);
  let grass3TopY = height/2 + height/10;
  let grass3BottomY = height;
  let grad = drawingContext.createLinearGradient(0, grass3BottomY, 0, grass3TopY);
  
    grad.addColorStop(0, c1WithAlpha.toString());
    grad.addColorStop(0.65, c1WithAlpha.toString());
    grad.addColorStop(1, c2WithAlpha.toString());
    drawingContext.fillStyle = grad; 

  noStroke();
  beginShape();
  translate(-35, 0); 
  vertex(width/2 + 15, height); 
  quadraticVertex(width/2-180+ wind*4, height/2 - height/2.5+ wind*2, width/2 - width/3, height/2 - height/6); 
  quadraticVertex(width/2 - 180+ wind*4,height/2 - height/2+ wind*4, width/2 + 60, height); 
  endShape(CLOSE);
}