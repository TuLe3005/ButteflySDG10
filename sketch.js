// Info Modal Logic
document.addEventListener('DOMContentLoaded', function() {
  const infoBtn = document.getElementById('info-btn');
  const infoModal = document.getElementById('info-modal');
  const closeInfo = document.getElementById('close-info');
  if (infoBtn && infoModal && closeInfo) {
    infoBtn.addEventListener('click', () => {
      infoModal.classList.remove('hidden');
    });
    closeInfo.addEventListener('click', () => {
      infoModal.classList.add('hidden');
    });
    // Optional: close modal when clicking outside content
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) {
        infoModal.classList.add('hidden');
      }
    });
  }
});
let circleWidth100;
let circleWidth50; 
let a1, a2, b1, b2, c1, c2, d; 
let morph = 0; 

const morphSpeed = 0.004; 
const trailAlpha = 30;

let richTop1Blend = 0; //ai
let middle1TopBlend = 0; 
let richTop2Blend = 0; 
let middle2TopBlend = 0; 
let low1TopBlend = 0; 
let low2TopBlend = 0; 
let richBottomBlend = 0; 
let middleBottomBlend = 0; 

const pressEase = 0.12; //ai 

let lowBottomMask; 
let lowBottomLayer; 

let gradient; 

let lastTime = 0; // To track the last time the mouse was pressed or released
let wasMousePressed = false; // To track the previous state of mouse press for detecting changes

let keyPressStartTime = 0; // To track when the key was first pressed

let blurRect; // create semi-transparent rectangle for blur effect in the background 
let radiusMultiplier1 = 1.0; // This multiplier will control the size of the petals, and it will be updated based on key presses. We can use this to create a pulsating effect when the user presses a key.
let radiusMultiplier2 = 1.0; // This will be the second multiplier that gets affected after the delay.
let radiusMultiplier3 = 1.0; // This will be the third multiplier that gets affected immediately when the key is pressed. We can use this to create a more immediate response in the animation, while the other two multipliers will create a more gradual change after the delay.

let wind = 0; // horizontal movement for the grass, affected by up/down arrows keys 
let windTime = 0; // This will be used to create a noise-based wind effect for the grass. By incrementing this value over time, we can create a smoothly changing wind effect that influences the movement of the grass blades.
let xoff = 0; // This will be used to create a noise-based wind effect for the grass. By incrementing this value over time, we can create a smoothly changing wind effect that influences the movement of the grass blades.

const radiusStep = 0.05;
const minRadius = 0.5; // The smallest the petal can be (e.g., half size)
const maxRadius = 1.5; // The largest the petal can be (e.g., double size)
const maxRadius1 = 1.3; // The largest the petal can be (e.g., double size)

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  // background(26); 
  angleMode(DEGREES);
  circleWidth100 = min(width, height) * 0.8;
  circleWidth50 = circleWidth100 / 2;

  a1 = color(205, 93, 146);
  a2 = color(242, 235, 240);
  b1 = color(255, 212, 146);
  b2 = color(245, 243, 238);
  c1 = color(177, 196, 120);
  c2 = color(250, 251, 245);
  d = color(226, 176, 193);

  blurRect = createGraphics(windowWidth, windowHeight/12); // Create a separate graphics for the blur effect
}

function draw() {
  // 1. Handle the Background/Trail first 
  // (This clears the previous frame slightly)
  handleInput(); 
  noStroke(); 
  fill(26, trailAlpha);
  rect(0, 0, width, height); 

  // 2. Handle Logic/Morphing
  click(); 

  // 3. Draw the Circle (MIDDLE LAYER)
  push(); 
  translate(width/2, height/2);
  drawCircle(); 
  pop(); 

  // 4. Draw the Grass (FURTHEST BACK)
  push(); 
  drawGrass(); 
  pop(); 

  // 5. Draw the butterfly (TOP LAYER)
  push(); 
  translate(width/2, height/2);
  rotate(5); 
  mainDraw(255, 1); 
  pop(); 

  // 6. Draw the notes (TOP LAYER)
  push();
  translate(width*0.04,height/3.1);
  drawPinkNote();
  drawYellowNote();
  drawGreenNote(); 
  pop();
}




