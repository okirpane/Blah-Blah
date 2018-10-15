//make sure HTTPS is checked
/* video & audio input
Use eyebrows() to get eyebrow height
Use lips() to get amout mouth is open
Use loudness to get mic volume
*/
//video
var ctracker;
var videoInput;
var positions;
//audio
var mic, loudness;
var portrait;
var mouth, head;
var mouth2, head2;
function setup() {
  //portrait = loadImage("portraithead.png");
  mouth2 = loadImage("mouth2.png");
  head2 = loadImage("head2.png");
  //mouth = loadImage("mouth.png");
  //head = loadImage("head.png");
  videoSetup();
  audioSetup();
  // setup canvas (window)
  var window = createCanvas(600, 340);
  window.position(0, 0);
  trackerSetup();
}

function draw() {
  background(0, 255, 255);
  // imageMode(CORNER);
  image(videoInput,width/2,height/2,width,height);
  getMicData();
  getVideoFaceData();
  mirrorVideo();
  translate(width / 2, height / 2);
  if (positions.length > 0) {
    var rot = String(positions[33][0]) - String(positions[7][0]);
    rotate(radians(rot));
    var hx = String(positions[41][0]) - width / 2;
    var hy = String(positions[41][1]) - height / 2-20;
    var hw = String(positions[13][0]) - String(positions[1][0]);
    var hh = String(positions[60][1]) - String(positions[17][1])+30;
    var mx = String(positions[53][0]) - width / 2;
    var my = String(positions[53][1])+50 - height / 2;
    var mw = String(positions[13][0]) - String(positions[1][0]);
    var mh = String(positions[7][1]) - String(positions[60][1]);
    imageMode(CENTER);
    image(head2, hx, hy, hw, hh);
    image(mouth2, mx, my, mw, mh);
	//image(head, hx, hy, hw, hh);
    //image(mouth, mx, my, mw, mh);
  }
  translate(width / 2, height / 2);
   showTracking();
}