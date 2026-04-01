function drawPinkNote() { 
  push(); 
  //gradient//
   let gradientHeight = 0.1*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  
    grad.addColorStop(0, a1);
    grad.addColorStop(1, a2);
    drawingContext.fillStyle = grad; 

  translate(width - 0.15*width, height - 0.45*height);
  //drawing the note shape//
  beginShape(); 
  noStroke(); 
  vertex(0, 0);
  quadraticVertex(-50, -10, 0, -50);  
  quadraticVertex(50, -10, 0, 0);
  endShape(CLOSE);
  pop();
}


function drawYellowNote() { 
  push(); 
  
  let gradientHeight = 0.1*circleWidth100/2; 
  let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  grad.addColorStop(0, b1);
  grad.addColorStop(1, b2);
  drawingContext.fillStyle = grad; 
  translate(width - 0.15*width, height - 0.4*height);
  scale(0.8); 
  beginShape(); 
  noStroke(); 
  vertex(0, 0);
  quadraticVertex(-50, -10, 0, -50);  
  quadraticVertex(50, -10, 0, 0);
  endShape(CLOSE);
  pop();
}

function drawGreenNote() { 
  push(); 
  let gradientHeight = 0.1*circleWidth100/2; 
  let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  grad.addColorStop(0, c1);
  grad.addColorStop(1, c2);
  drawingContext.fillStyle = grad; 
  translate(width - 0.15*width, height - 0.36*height);
  scale(0.5); 
  beginShape(); 
  noStroke(); 
  vertex(0, 0);
  quadraticVertex(-50, -10, 0, -50);  
  quadraticVertex(50, -10, 0, 0);
  endShape(CLOSE);
  pop();
}