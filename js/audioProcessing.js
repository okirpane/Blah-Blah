function audioSetup() {
  //setup mic input
	mic = new p5.AudioIn();
  mic.start();
}

function getMicData() {
  //get mic input and adjust
  var vol = mic.getLevel();
  loudness = map(vol, 0, 1, 0, 400);
}