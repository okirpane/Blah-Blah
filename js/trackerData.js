function trackerSetup() {
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
}

function getVideoFaceData() {
  // get array of face marker positions [x, y] format
  positions = ctracker.getCurrentPosition();
}

function lips() {
	if(positions.length > 0) {
    var upperLipX = String(positions[60][0]);
    var upperLipY = String(positions[60][1]);
    var lowerLipX = String(positions[57][0]);
    var lowerLipY = String(positions[57][1]);
    var mouthHt = dist(upperLipX,upperLipY,lowerLipX,lowerLipY);
    return mouthHt;
  }
}

function eyebrows() {
  if(positions.length > 0) {
    var browX = String(positions[21][0]);
    var browY = String(positions[21][1]);
    var eyeX = String(positions[24][0]);
    var eyeY = String(positions[24][1]);
    var chinX = String(positions[7][0]);
    var chinY = String(positions[7][1]);
    var browHt = dist(browX,browY,eyeX,eyeY);
    var eyeHt = dist(eyeX,eyeY,chinX,chinY);
    var browToEyeRatio = browHt/eyeHt;
    // console.log(browToEyeRatio);
    return browToEyeRatio * 100;
  }
}


function showTracking() {
  noStroke();
  for (var i=0; i<positions.length; i++) {
    // set the color of the ellipse based on position on screen
    fill(255,0,255);
    // draw ellipse at each position point
    ellipse(positions[i][0], positions[i][1], 5, 5);
    }
}