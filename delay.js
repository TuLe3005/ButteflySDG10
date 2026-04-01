// create wind (using noise), delay variables, grass movement based on up and down arrow keys. 
function handleInput() {
  const increment = 0.01;
  const stage2Delay = 800;  // 0.8 seconds
  const stage3Delay = 1500; // 1.5 seconds

  // Check if either arrow key is being held down
  if (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
    frameRate(30); 
    
    // If we just started pressing the key, record the start time
    if (keyPressStartTime === 0) {
      keyPressStartTime = millis();
    }

    // Calculate how long the key has been held
    let pressDuration = millis() - keyPressStartTime;

    // 1. Increment windTime to animate the noise
    windTime += 0.02; 
    
    // 2. Map from the correct noise range (0 to 1)
    let targetWind = map(noise(windTime), 0, 1, -20, 20);
    
    // 3. Use a small value for lerp() to create smooth motion
    wind = lerp(wind, targetWind, 0.1); 

    // Determine the direction of change (up or down)
    let direction = keyIsDown(UP_ARROW) ? 1 : -1;

    // --- Stage 1: Always affect the third multiplier ---
    radiusMultiplier3 += increment * direction;

    // --- Stage 2: After the delay, also affect the second multiplier ---
    if (pressDuration > stage2Delay) {
      radiusMultiplier2 += increment * direction;
    }
    
    // --- Stage 3: After the final delay, affect the first multiplier ---
    if (pressDuration > stage3Delay) {
      radiusMultiplier1 += increment * direction;
    }

  } else {
    // If no arrow key is pressed, reset the timer
    keyPressStartTime = 0;
    // Smoothly return the wind to 0
    wind = lerp(wind, 0, 0.05); 
  }

  // Constrain the values at the end to keep them within limits
  radiusMultiplier1 = constrain(radiusMultiplier1, minRadius, maxRadius1);
  radiusMultiplier2 = constrain(radiusMultiplier2, minRadius, maxRadius);
  radiusMultiplier3 = constrain(radiusMultiplier3, minRadius, maxRadius);
}