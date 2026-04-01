function click() {
    if (mouseIsPressed && !wasMousePressed) { // only trigger when the mouse is pressed. 
    lastTime = millis(); // Update the lastTime to the current time when the mouse is pressed
  }
  wasMousePressed = mouseIsPressed; // store the current state of mouse press for the next frame 
  //this help us to reset the timer when the mouse is released, so that the next time we press it, it will start counting from 0 again.
  

  // this is morphing the butterfly wings when the mouse is pressed. Make sure the morphing happens after the click is detected, so that it will be smooth.
  morph += morphSpeed; 
  const targetBlend = mouseIsPressed ? 1 : 0;
  richTop1Blend = lerp(richTop1Blend, targetBlend, pressEase); 
  richTop2Blend = lerp(richTop2Blend, targetBlend, pressEase);
  middle1TopBlend = lerp(middle1TopBlend, targetBlend, pressEase); 
  middle2TopBlend = lerp(middle2TopBlend, targetBlend, pressEase);
  low1TopBlend = lerp(low1TopBlend, targetBlend, pressEase); 
  low2TopBlend = lerp(low2TopBlend, targetBlend, pressEase); 
  richBottomBlend = lerp(richBottomBlend, targetBlend, pressEase); 
  middleBottomBlend = lerp(middleBottomBlend, targetBlend, pressEase);
}
