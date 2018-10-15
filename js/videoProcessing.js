function videoSetup() {
  // setup camera capture
  videoInput = createCapture(VIDEO);
  videoInput.size(600, 340);
  videoInput.position(0, 0);
  //hide video feed
  videoInput.hide();
}

function mirrorVideo() {
  translate(videoInput.width, 0);
  scale(-1, 1);
}